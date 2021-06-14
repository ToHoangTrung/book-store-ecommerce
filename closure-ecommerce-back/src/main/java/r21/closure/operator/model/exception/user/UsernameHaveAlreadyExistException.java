package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ResourceHaveAlreadyExistException;

public class UsernameHaveAlreadyExistException extends ResourceHaveAlreadyExistException {

    public UsernameHaveAlreadyExistException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_USERNAME_HAVE_ALREADY_EXIST);
    }
}
