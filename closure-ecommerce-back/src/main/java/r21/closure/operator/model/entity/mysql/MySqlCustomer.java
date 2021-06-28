package r21.closure.operator.model.entity.mysql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "customer")
@Getter
@Setter
public class MySqlCustomer extends AbstractMySqlEntity{

    private String name;

    private LocalDate birthday;

    private String cmnd;

    private String phone;

    @OneToMany(mappedBy = "customer")
    private Set<MySqlAddress> addresses = new HashSet<>();

    @OneToOne
    @JoinColumn
    private MySqlUser user;

    @OneToMany(mappedBy = "customer")
    private Set<MySqlPayment> payments = new HashSet<>();

}
