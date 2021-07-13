package r21.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.model.exception.side.product.ProductNotFoundException;
import r21.closure.operator.repository.mongo.MongoProductRepository;

@Component
public class ProductValidator {

    @Autowired
    private MongoProductRepository mongoProductRepository;

    public MongoProduct getProductIfExist(Long id) {
        MongoProduct product = mongoProductRepository.findById(id);
        if (product == null) {
            throw new ProductNotFoundException(String.format("Product with id: %s does not found", id));
        }
        return product;
    }
}
