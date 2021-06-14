package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ResourceNotFoundException;

public class RoleNotSupportException extends ResourceNotFoundException {

    public RoleNotSupportException(String message) {
        super(message, ClosureEcommerceErrorCode.USER_ROLE_NOT_SUPPORT);
    }
}
