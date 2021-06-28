package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class PasswordNotCorrectException extends ClosureEntityNotFoundException {

    public PasswordNotCorrectException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_PASSWORD_NOT_CORRECT);
    }
}
