package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartDto{

    private String id;

    private ProductDto product;

    private Integer amount;

}
