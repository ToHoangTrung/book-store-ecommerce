package r21.closure.operator.repository.neo4j;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.neo4j.Neo4jRating;
import r21.closure.operator.model.entity.neo4j.queryresult.RatingQueryResult;

import java.util.List;

@Repository
public interface Neo4jRatingRepository extends Neo4jRepository<Neo4jRating, Long> {

    @Query("MATCH (p:Product)<-[r:RATING]-(c:Customer) WHERE p.id = $id RETURN r.score as score, r.comment as comment, c.id as customerId")
    List<RatingQueryResult> getRatingByProductId(@Param("id") Long id);
}
