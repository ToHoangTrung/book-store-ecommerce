package r21.closure.operator.model.entity.redis;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.io.Serializable;

@RedisHash("cart")
@Getter
@Setter
public class RedisCart implements Serializable {

    @Id
    private String id;

    @Indexed
    private Long customerId;

    @Indexed
    private Long productId;

    private Integer amount;

    public RedisCart(String id, Long customerId, Long productId, Integer amount) {
        this.id = id;
        this.customerId = customerId;
        this.productId = productId;
        this.amount = amount;
    }

    public RedisCart() {

    }
}
