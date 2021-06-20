package r21.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.model.entity.neo4j.Neo4jCustomer;

@Repository
public interface UserRepository extends JpaRepository<MySqlUser, Long>{

    MySqlUser findByUsername(String username);

    MySqlUser findByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
