package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ResourceNotFoundException;

public class EmailNotFoundException extends ResourceNotFoundException {

    public EmailNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_EMAIL_NOT_FOUND);
    }
}
