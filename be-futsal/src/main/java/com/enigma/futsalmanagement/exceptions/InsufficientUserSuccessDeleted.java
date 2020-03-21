package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class InsufficientUserSuccessDeleted extends RuntimeException {
    public InsufficientUserSuccessDeleted() {
        super(ExceptionConstants.USER_SUCCESS_DELETED);
    }
}