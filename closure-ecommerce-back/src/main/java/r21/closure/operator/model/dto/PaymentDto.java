package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import org.apache.tomcat.jni.Local;

import java.time.LocalDate;

@Getter
@Setter
public class PaymentDto extends AbstractDto{

    private Integer amount;

    private LocalDate paymentDate;

    private ProductDto product;
}
