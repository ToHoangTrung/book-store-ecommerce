package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityHaveAlreadyExistException;

public class UsernameHaveAlreadyExistException extends ClosureEntityHaveAlreadyExistException {

    public UsernameHaveAlreadyExistException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_USERNAME_HAVE_ALREADY_EXIST);
    }
}
