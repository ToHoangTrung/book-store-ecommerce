package r21.closure.operator.model.entity.mysql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "address")
@Getter
@Setter
public class MySqlAddress extends AbstractMySqlEntity{

    private String street;

    private String city;

    private String region;

    private String country;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private MySqlCustomer customer;
}
