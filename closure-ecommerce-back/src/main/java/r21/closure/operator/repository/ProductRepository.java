package r21.closure.operator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import r21.closure.operator.model.entity.mongo.MongoProduct;

public interface ProductRepository extends MongoRepository<MongoProduct, String> {
}
