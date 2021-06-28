package r21.closure.operator.model.exception.side.product;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class ProductNotFoundException extends ClosureEntityNotFoundException {

    public ProductNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.PRODUCT_NOT_FOUND);
    }
}
