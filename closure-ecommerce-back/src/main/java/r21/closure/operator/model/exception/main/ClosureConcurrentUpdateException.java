package r21.closure.operator.model.exception.main;

import org.springframework.dao.OptimisticLockingFailureException;

public class ClosureConcurrentUpdateException extends OptimisticLockingFailureException {

    public ClosureConcurrentUpdateException(Long id, Class<?> clazz) {
        super(String.format(
                "This '%s' have id '%s' have been updated by someone else, please refresh to get the newest version",
                clazz.getName(), id ));
    }

    public ClosureConcurrentUpdateException(String message) {
        super(message);
    }
}
