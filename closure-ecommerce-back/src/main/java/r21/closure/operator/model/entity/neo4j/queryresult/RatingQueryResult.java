package r21.closure.operator.model.entity.neo4j.queryresult;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.neo4j.annotation.QueryResult;

@QueryResult
@Getter
@Setter
public class RatingQueryResult {

    private Long customerId;

    private Double score;

    private String comment;

}
