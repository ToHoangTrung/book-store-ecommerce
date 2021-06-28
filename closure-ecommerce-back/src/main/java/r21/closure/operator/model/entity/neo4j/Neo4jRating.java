package r21.closure.operator.model.entity.neo4j;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.*;

@JsonIdentityInfo(generator = JSOGGenerator.class)
@RelationshipEntity(type = "RATING")
@Getter
@Setter
public class Neo4jRating extends AbstractNeo4jEntity{

    @Property
    private String score;

    @Property
    private String comment;

    @StartNode
    private Neo4jCustomer customer;

    @EndNode
    private Neo4jProduct product;

}
