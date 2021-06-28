package r21.closure.operator.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import r21.closure.operator.model.entity.mongo.MongoProduct;

import java.util.List;

public interface MongoProductRepository extends MongoRepository<MongoProduct, String> {

    MongoProduct findById(Long id);

    List<MongoProduct> findByCatalogId(Long id);

}
