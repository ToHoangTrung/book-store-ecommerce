package r21.closure.operator.model.entity.neo4j;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;

import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
public abstract class AbstractNeo4jEntity {

    @Id
    @GeneratedValue
    private Long id;
}
