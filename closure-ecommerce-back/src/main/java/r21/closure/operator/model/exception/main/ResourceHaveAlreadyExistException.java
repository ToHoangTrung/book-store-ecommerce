package r21.closure.operator.model.exception.main;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import r21.closure.operator.model.exception.config.ItJobBoardException;
import r21.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;

@ResponseStatus(HttpStatus.CONFLICT)
public class ResourceHaveAlreadyExistException extends ItJobBoardException {

    public ResourceHaveAlreadyExistException(String errorMessage) {
        super(errorMessage, ItJobBoardExceptionErrorCode.RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION, HttpStatus.CONFLICT);
    }

    public ResourceHaveAlreadyExistException(String errorMessage, String exceptionErrorCode) {
        super(errorMessage, exceptionErrorCode, HttpStatus.NOT_FOUND);
    }
}
