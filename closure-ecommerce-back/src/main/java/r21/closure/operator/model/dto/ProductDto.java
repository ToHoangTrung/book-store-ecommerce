package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProductDto extends AbstractDto{

    private Integer sku;

    private String name;

    private String description;

    private Integer price;

    private Integer discount;

    private String thumbnail;

    private String inventoryStatus;

    private String author;

    private String publishYear;

    private CatalogDto catalog;

    private List<RatingDto> ratings;
}
