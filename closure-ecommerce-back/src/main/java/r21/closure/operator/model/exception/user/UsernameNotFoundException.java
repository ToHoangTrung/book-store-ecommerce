package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ResourceNotFoundException;

public class UsernameNotFoundException extends ResourceNotFoundException {

    public UsernameNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_USERNAME_NOT_FOUND);
    }
}
