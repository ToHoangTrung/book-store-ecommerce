package r21.closure.operator.model.entity.neo4j;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(generator = JSOGGenerator.class)
@NodeEntity(label = "Customer")
@Setter
@Getter
public class Neo4jCustomer{


    @Id
    @GeneratedValue
    private Long id;

    @Relationship(type = "RATING")
    private List<Neo4jProduct> products;
}
