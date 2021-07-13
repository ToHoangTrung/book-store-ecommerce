package r21.closure.operator.repository.redis;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import r21.closure.operator.model.entity.redis.RedisCart;

import java.util.List;

@Repository
public interface RedisCartRepository extends CrudRepository<RedisCart, String> {

    List<RedisCart> findByCustomerId(Long id);

    RedisCart findByProductIdAndCustomerId(Long productId, Long customerId);

}
