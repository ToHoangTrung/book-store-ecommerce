package r21.closure.operator.repository.mysql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.mysql.MySqlUser;

@Repository
public interface MySqlUserRepository extends JpaRepository<MySqlUser, Long>{

    MySqlUser findByUsername(String username);

    MySqlUser findByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
