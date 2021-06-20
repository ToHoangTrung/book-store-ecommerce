package r21.closure.operator.repository.neo4j;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.neo4j.Neo4jCustomer;

@Repository
public interface CustomerRepository extends Neo4jRepository<Neo4jCustomer, Long> {
}
