package r21.closure.operator.model.entity.mysql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "payment")
@Getter
@Setter
public class MySqlPayment extends AbstractMySqlEntity{

    private Integer total;

    private LocalDate paymentDate;

    @ManyToOne
    @JoinColumn
    private MySqlCustomer customer;

    @OneToMany(mappedBy = "payment", cascade = CascadeType.ALL)
    private List<MySqlPaymentDetail> paymentDetails = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING("Under shipping", "Đang giao hàng"),
        SUCCESS("Shipping successfully", "Giao hàng thành công"),
        CANCEL("Order cancelled", "Đã hủy"),
        REFUND("Refund successfully", "Đã hoàn tiền");

        public final String enTranslate;
        public final String vnTranslate;

        Status(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

    @Enumerated(EnumType.STRING)
    private Method method;

    public enum Method {
        CASH("Cash", "Tiền mặt"),
        MOMO("Momo", "Thanh tóa Momo"),
        CREDIT("Credit", "Thanh toán qua credit card");

        public final String enTranslate;
        public final String vnTranslate;

        Method(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }
}
