package r21.closure.operator.repository;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.Book;

import java.util.Collection;

@Repository
public interface BookRepository extends Neo4jRepository<Book, Long> {

    Book findByName(@Param("name") String name);

    @Query("MATCH (m:Movie) WHERE m.title =~ ('(?i).*'+{title}+'.*') RETURN m")
    Collection<Book>
    findByTitleContaining(@Param("title") String title);

}
