package r21.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
}
