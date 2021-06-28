package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartDto extends AbstractDto{

    private Long userId;

    private Long productId;

    private Integer amount;
}
