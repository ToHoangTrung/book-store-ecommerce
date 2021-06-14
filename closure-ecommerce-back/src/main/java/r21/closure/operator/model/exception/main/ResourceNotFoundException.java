package r21.closure.operator.model.exception.main;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import r21.closure.operator.model.exception.config.ClosureEcommerceException;
import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends ClosureEcommerceException {

    public ResourceNotFoundException(String errorMessage) {
        super(errorMessage, ClosureEcommerceErrorCode.RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION, HttpStatus.NOT_FOUND);
    }

    public ResourceNotFoundException(String errorMessage, String exceptionErrorCode) {
        super(errorMessage, exceptionErrorCode, HttpStatus.NOT_FOUND);
    }
}
