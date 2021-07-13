package r21.closure.operator.dbconfig.redis.queue;

public interface MessagePublisher {

    void publish(final String message);
}
