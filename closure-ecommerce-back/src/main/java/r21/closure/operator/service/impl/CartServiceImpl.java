package r21.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.model.entity.redis.RedisCart;
import r21.closure.operator.model.entity.redis.queryresult.CartQueryResult;
import r21.closure.operator.model.exception.side.cart.CartProductNotFoundException;
import r21.closure.operator.repository.mongo.MongoProductRepository;
import r21.closure.operator.repository.redis.RedisCartRepository;
import r21.closure.operator.service.CartService;
import r21.closure.operator.util.CartMapper;
import r21.closure.operator.validator.ProductValidator;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private RedisCartRepository redisCartRepository;

    @Autowired
    private MongoProductRepository mongoProductRepository;

    @Autowired
    private ProductValidator productValidator;

    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public List<CartDto> getCustomerCart(Long customerId) {
        List<RedisCart> redisCarts = redisCartRepository.findByCustomerId(customerId);
        List<CartQueryResult> cartQueryResults = new ArrayList<>();
        redisCarts.forEach(redisCart -> {
            MongoProduct product = mongoProductRepository.findById(redisCart.getProductId());
            if (product != null) {
                CartQueryResult cartQueryResult = new CartQueryResult();
                cartQueryResult.setProduct(product);
                cartQueryResult.setId(redisCart.getId());
                cartQueryResult.setAmount(redisCart.getAmount());
                cartQueryResults.add(cartQueryResult);
            }
        });
        return cartQueryResults.stream().map(CartMapper::CartQueryResultToCartDto)
                .sorted(Comparator.comparing(cartDto -> cartDto.getProduct().getId()))
                .collect(Collectors.toList());
    }

    @Override
    public List<CartDto> createOrUpdateCustomerCart(Long customerId, List<CartDto> cartDtos) {
        for (CartDto cartDto : cartDtos) {
            deleteCustomerCartProduct(cartDto.getProduct().getId(), customerId);
            RedisCart redisCart = new RedisCart();
            redisCart.setCustomerId(customerId);
            redisCart.setAmount(cartDto.getAmount());
            redisCart.setProductId(productValidator.getProductIfExist(cartDto.getProduct().getId()).getId());
            redisCartRepository.save(redisCart);
        }
        return getCustomerCart(customerId);
    }

    @Override
    public void deleteCustomerCartProduct(Long productId, Long customerId) {
        RedisCart redisCart = redisCartRepository.findByProductIdAndCustomerId(productId, customerId);
        if (redisCart != null) {
            redisTemplate.delete(redisCart.getId());
            redisCartRepository.delete(redisCart);
        }
    }

    private void prepareSampleDate() {
        redisCartRepository.save(new RedisCart(null, 1L, 1L, 1));
        redisCartRepository.save(new RedisCart(null, 1L, 2L, 2));
        redisCartRepository.save(new RedisCart(null, 2L, 3L, 3));
        redisCartRepository.save(new RedisCart(null, 2L, 4L, 4));
        redisCartRepository.save(new RedisCart(null, 3L, 5L, 5));
        redisCartRepository.save(new RedisCart(null, 3L, 6L, 6));
        redisCartRepository.save(new RedisCart(null, 3L, 7L, 7));
        redisCartRepository.save(new RedisCart(null, 4L, 8L, 8));
        redisCartRepository.save(new RedisCart(null, 5L, 9L, 9));
        redisCartRepository.save(new RedisCart(null, 5L, 10L, 10));
        redisCartRepository.save(new RedisCart(null, 5L, 11L, 11));
    }
}
