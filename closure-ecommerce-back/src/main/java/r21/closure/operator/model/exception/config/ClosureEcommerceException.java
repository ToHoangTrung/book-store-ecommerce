package r21.closure.operator.model.exception.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import r21.closure.operator.model.dto.exception.ExceptionResponse;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ClosureEcommerceException extends RuntimeException{

    private final ExceptionResponse exceptionResponse;

    public ClosureEcommerceException(String errorMessage, String errorCode, HttpStatus httpStatus){
        super(errorMessage);
        exceptionResponse = new ExceptionResponse(errorMessage, errorCode, httpStatus, new ArrayList<>());
    }

    public ClosureEcommerceException(String errorMessage, String errorCode, HttpStatus httpStatus, List<String> errors){
        super(errorMessage);
        exceptionResponse = new ExceptionResponse(errorMessage, errorCode, httpStatus, errors);
    }
}
