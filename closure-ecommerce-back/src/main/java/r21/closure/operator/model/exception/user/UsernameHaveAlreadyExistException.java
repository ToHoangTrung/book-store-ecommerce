package r21.closure.operator.model.exception.user;

import r21.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import r21.closure.operator.model.exception.main.ResourceHaveAlreadyExistException;

public class UsernameHaveAlreadyExistException extends ResourceHaveAlreadyExistException {

    public UsernameHaveAlreadyExistException(String message) {
        super(message, ItJobBoardExceptionErrorCode.USER_USERNAME_HAVE_ALREADY_EXIST);
    }
}
