package r21.closure.operator.model.exception.side.customer;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class CustomerNotFoundException extends ClosureEntityNotFoundException {

    public CustomerNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.CUSTOMER_NOT_FOUND);
    }
}
