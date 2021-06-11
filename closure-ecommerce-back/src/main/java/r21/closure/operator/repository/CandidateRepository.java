package r21.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
}
