package r21.closure.operator.model.entity.mysql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "payment")
@Getter
@Setter
public class MySqlPayment extends AbstractMySqlEntity{

    private Integer amount;

    private LocalDate paymentDate;

    @ManyToOne
    @JoinColumn
    private MySqlCustomer customer;
}
