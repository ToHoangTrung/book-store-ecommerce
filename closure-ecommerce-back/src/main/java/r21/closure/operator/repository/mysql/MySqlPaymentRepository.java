package r21.closure.operator.repository.mysql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.mysql.MySqlPayment;

import java.util.List;

@Repository
public interface MySqlPaymentRepository extends JpaRepository<MySqlPayment, Long> {

    List<MySqlPayment> findByCustomerId(Long id);

    MySqlPayment findByCustomerIdAndId(Long customerId, Long paymentId);
}
