package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityHaveAlreadyExistException;

public class EmailHaveAlreadyExistException extends ClosureEntityHaveAlreadyExistException {

    public EmailHaveAlreadyExistException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_EMAIL_HAVE_ALREADY_EXIST);
    }
}
