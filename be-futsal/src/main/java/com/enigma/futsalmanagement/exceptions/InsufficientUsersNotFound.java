package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.core.Constants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InsufficientUsersNotFound extends RuntimeException {
    public InsufficientUsersNotFound() {
        super(ExceptionConstants.USERNAME_NOT_FOUND);
    }
}
