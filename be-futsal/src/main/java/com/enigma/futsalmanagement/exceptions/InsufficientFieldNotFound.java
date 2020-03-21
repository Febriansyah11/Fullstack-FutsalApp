package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InsufficientFieldNotFound extends RuntimeException {
    public InsufficientFieldNotFound() {
        super(ExceptionConstants.FIELD_NOT_FOUND);
    }
}
