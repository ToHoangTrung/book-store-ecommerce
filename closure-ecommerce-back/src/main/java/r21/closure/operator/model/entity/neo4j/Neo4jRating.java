package r21.closure.operator.model.entity.neo4j;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.*;

@JsonIdentityInfo(generator = JSOGGenerator.class)
@RelationshipEntity(type = "ACTED_IN")
@Getter
@Setter
public class Neo4jRating extends AbstractNeo4jEntity{

    private String score;

    private String comment;

    @StartNode
    private Neo4jCustomer user;

    @EndNode
    private Neo4jProduct product;
}
