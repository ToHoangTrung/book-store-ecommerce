package r21.closure.operator.model.entity.neo4j;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.List;

@NodeEntity
@Setter
@Getter
public class Neo4jCustomer extends AbstractNeo4jEntity{

    @Relationship(type="RATING")
    private List<Neo4jProduct> products = new ArrayList<>();
}
