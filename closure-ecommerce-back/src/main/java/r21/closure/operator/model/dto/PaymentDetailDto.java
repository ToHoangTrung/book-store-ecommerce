package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentDetailDto extends AbstractDto{

    private ProductDto product;

    private Integer amount;
}
