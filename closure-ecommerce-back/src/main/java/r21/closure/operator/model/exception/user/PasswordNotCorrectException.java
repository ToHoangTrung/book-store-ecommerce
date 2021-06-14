package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ResourceNotFoundException;

public class PasswordNotCorrectException extends ResourceNotFoundException {

    public PasswordNotCorrectException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_PASSWORD_NOT_CORRECT);
    }
}
