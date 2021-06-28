package r21.closure.operator.model.entity.redis;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.List;

//@RedisHash("Cart")
@Getter
@Setter
public class Cart implements Serializable {

    private Long userId;

    private Long productId;

    private Integer amount;
}
