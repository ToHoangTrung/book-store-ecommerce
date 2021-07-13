package r21.closure.operator.repository.mysql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;

@Repository
public interface MySqlCustomerRepository extends JpaRepository<MySqlCustomer, Long> {

    MySqlCustomer findByUserId(Long id);
}
