package r21.closure.operator.model.entity.mysql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "payment_detail")
@Getter
@Setter
public class MySqlPaymentDetail extends AbstractMySqlEntity{

    private Long productId;

    private Integer amount;

    @ManyToOne
    @JoinColumn
    private MySqlPayment payment;
}
