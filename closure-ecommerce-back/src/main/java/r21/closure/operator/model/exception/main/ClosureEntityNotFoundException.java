package r21.closure.operator.model.exception.main;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import r21.closure.operator.model.exception.config.ClosureEcommerceException;
import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ClosureEntityNotFoundException extends ClosureEcommerceException {

    public ClosureEntityNotFoundException(String errorMessage) {
        super(errorMessage, ClosureEcommerceErrorCode.CLOSURE_RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION, HttpStatus.NOT_FOUND);
    }

    public ClosureEntityNotFoundException(String errorMessage, String exceptionErrorCode) {
        super(errorMessage, exceptionErrorCode, HttpStatus.NOT_FOUND);
    }
}
