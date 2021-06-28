package r21.closure.operator.model.exception.side.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class RoleNotSupportException extends ClosureEntityNotFoundException {

    public RoleNotSupportException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_ROLE_NOT_SUPPORT);
    }
}
