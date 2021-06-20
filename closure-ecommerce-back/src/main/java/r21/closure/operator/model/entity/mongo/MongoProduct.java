package r21.closure.operator.model.entity.mongo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Year;

@Document(collection = "product")
@Getter
@Setter
public class MongoProduct {

    @Id
    private String id;

    private Integer sku;

    private String name;

    private String description;

    private Integer price;

    private Integer discount;

    private String thumbnail;

    private String inventoryStatus;

    private String author;

    private Year publishYear;

}
