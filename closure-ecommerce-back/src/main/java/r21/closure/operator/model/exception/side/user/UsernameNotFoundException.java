package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class UsernameNotFoundException extends ClosureEntityNotFoundException {

    public UsernameNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_USERNAME_NOT_FOUND);
    }
}
