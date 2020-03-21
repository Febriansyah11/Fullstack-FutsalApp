package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class InsufficientItemIsNotEnough extends RuntimeException {
    public InsufficientItemIsNotEnough () {
        super(ExceptionConstants.ITEM_IS_NOT_ENOUGH_);
    }
}
