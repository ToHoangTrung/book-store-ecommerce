package r21.closure.operator.model.exception.side.cart;

import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;

public class CartProductNotFoundException extends ClosureEntityNotFoundException {

    public CartProductNotFoundException(String message) {
        super(message, ClosureEcommerceErrorCode.CART_PRODUCT_NOT_FOUND);
    }
}
