package r21.closure.operator.model.exception.main;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import r21.closure.operator.model.exception.config.ClosureEcommerceException;
import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;

@ResponseStatus(HttpStatus.CONFLICT)
public class ClosureEntityHaveAlreadyExistException extends ClosureEcommerceException {

    public ClosureEntityHaveAlreadyExistException(String errorMessage) {
        super(errorMessage, ClosureEcommerceErrorCode.CLOSURE_RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION, HttpStatus.CONFLICT);
    }

    public ClosureEntityHaveAlreadyExistException(String errorMessage, String exceptionErrorCode) {
        super(errorMessage, exceptionErrorCode, HttpStatus.NOT_FOUND);
    }
}
