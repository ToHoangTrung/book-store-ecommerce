package r21.closure.operator.util;

import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.model.entity.redis.RedisCart;
import r21.closure.operator.model.entity.redis.queryresult.CartQueryResult;

public class CartMapper {

    public static CartDto CartQueryResultToCartDto(CartQueryResult entity){
        CartDto dto = new CartDto();
        dto.setId(entity.getId());
        dto.setProduct(ProductMapper.productToProductDto(entity.getProduct()));
        dto.setAmount(entity.getAmount());
        return dto;
    }
}
