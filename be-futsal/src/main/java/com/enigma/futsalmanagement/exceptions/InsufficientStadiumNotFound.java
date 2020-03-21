package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InsufficientStadiumNotFound extends RuntimeException {
    public InsufficientStadiumNotFound() {
        super(ExceptionConstants.STADIUM_NOT_FOUND);
    }
}
