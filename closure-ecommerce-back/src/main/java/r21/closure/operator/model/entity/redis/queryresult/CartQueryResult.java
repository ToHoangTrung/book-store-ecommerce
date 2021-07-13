package r21.closure.operator.model.entity.redis.queryresult;

import lombok.Getter;
import lombok.Setter;
import r21.closure.operator.model.entity.mongo.MongoProduct;

@Getter
@Setter
public class CartQueryResult {

    private String id;

    private MongoProduct product;

    private Integer amount;
}
