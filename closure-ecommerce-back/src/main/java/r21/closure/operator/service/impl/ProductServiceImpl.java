package r21.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.ProductDto;
import r21.closure.operator.model.dto.RatingDto;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.entity.neo4j.Neo4jRating;
import r21.closure.operator.model.entity.neo4j.queryresult.RatingQueryResult;
import r21.closure.operator.repository.mongo.MongoProductRepository;
import r21.closure.operator.repository.neo4j.Neo4jRatingRepository;
import r21.closure.operator.service.ProductService;
import r21.closure.operator.util.ProductMapper;
import r21.closure.operator.util.RatingMapper;
import r21.closure.operator.validator.CustomerValidator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private MongoProductRepository mongoProductRepository;

    @Autowired
    private Neo4jRatingRepository neo4jRatingRepository;

    @Autowired
    private CustomerValidator customerValidator;

    @Override
    public List<ProductDto> getProductsByCatalogId(Long id) {
        List<MongoProduct> products = mongoProductRepository.findByCatalogId(id);
        return products.stream().map(ProductMapper::productToProductDto).collect(Collectors.toList());
    }

    @Override
    public ProductDto getProductById(Long id) {
        ProductDto productDto = ProductMapper.productToProductDto(mongoProductRepository.findById(id));
        List<RatingQueryResult> productRatings = neo4jRatingRepository.getRatingByProductId(id);
        List<RatingDto> ratingDtos = new ArrayList<>();
        productRatings.forEach(productRating -> {
            MySqlCustomer customer = customerValidator.getCustomerIfExist(productRating.getCustomerId());
            Neo4jRating neo4jRating = new Neo4jRating();
            neo4jRating.setComment(String.valueOf(productRating.getScore()));
            neo4jRating.setScore(productRating.getComment());
            ratingDtos.add(RatingMapper.buildProductRatingDto(customer, neo4jRating));
        });
        productDto.setRatings(ratingDtos);
        return productDto;
    }

    @Override
    public List<ProductDto> getAllProduct() {
        List<MongoProduct> products = mongoProductRepository.findAll();
        return products.stream().map(ProductMapper::productToProductDto).collect(Collectors.toList());
    }

}
