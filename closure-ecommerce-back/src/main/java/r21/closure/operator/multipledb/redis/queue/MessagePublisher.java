package r21.closure.operator.multipledb.redis.queue;

public interface MessagePublisher {

    void publish(final String message);
}
