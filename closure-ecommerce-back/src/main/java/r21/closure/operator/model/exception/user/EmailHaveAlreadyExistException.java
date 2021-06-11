package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import r21.closure.operator.model.exception.main.ResourceHaveAlreadyExistException;

public class EmailHaveAlreadyExistException extends ResourceHaveAlreadyExistException {

    public EmailHaveAlreadyExistException(String message) {
        super(message, ItJobBoardExceptionErrorCode.USER_EMAIL_HAVE_ALREADY_EXIST);
    }
}
