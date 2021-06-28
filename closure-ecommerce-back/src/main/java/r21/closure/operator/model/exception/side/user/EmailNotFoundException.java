package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class EmailNotFoundException extends ClosureEntityNotFoundException {

    public EmailNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_EMAIL_NOT_FOUND);
    }
}
