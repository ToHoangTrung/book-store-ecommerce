package r21.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import r21.closure.operator.model.entity.Catalog;

public interface CatalogRepository extends JpaRepository<Catalog, Long>, QuerydslPredicateExecutor<Catalog> {
}
