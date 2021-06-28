package r21.closure.operator.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import r21.closure.operator.model.dto.exception.ExceptionResponse;
import r21.closure.operator.model.exception.config.ClosureEcommerceException;
import r21.closure.operator.model.exception.config.ClosureEcommerceErrorCode;
import r21.closure.operator.model.exception.main.ClosureConcurrentUpdateException;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger LOGGER = Logger.getLogger( GlobalExceptionHandler.class.getName() );

    @ExceptionHandler(ClosureEcommerceException.class)
    public ResponseEntity<Object> handlePimToolException(ClosureEcommerceException e) {
        return new ResponseEntity<>(e.getExceptionResponse(), e.getExceptionResponse().getHttpStatus());
    }

    @ExceptionHandler(ClosureConcurrentUpdateException.class)
    public ResponseEntity<Object> handleConcurrentUpdate(ClosureConcurrentUpdateException e) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(e.getMessage(), ClosureEcommerceErrorCode.CLOSURE_CONCURRENT_UPDATE_EXCEPTION, HttpStatus.CONFLICT);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<String> errors = new ArrayList<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.add(fieldName.concat(": ").concat(errorMessage));
        });
        ExceptionResponse exceptionResponse = new ExceptionResponse("The following input type is incorrect", ClosureEcommerceErrorCode.CLOSURE_UN_HANDLE_EXCEPTION, HttpStatus.CONFLICT, errors);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<Object> handleGenericException(Exception ex) {
        LOGGER.log( Level.WARNING, ex.getMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage(), ClosureEcommerceErrorCode.CLOSURE_UN_HANDLE_EXCEPTION, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}

