package r21.closure.operator.model.entity.mongo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "products")
@Getter
@Setter
public class MongoProduct {

    @MongoId(FieldType.OBJECT_ID)
    private String objectId;

    private Long id;

    private Integer sku;

    private String name;

    private String description;

    private Integer price;

    private Integer discount;

    private String thumbnail;

    @Field("inventory_status")
    private String inventoryStatus;

    private String author;

    @Field("publish_year")
    private String publishYear;

    @Field("catalog")
    private MongoCatalog catalog;
}
