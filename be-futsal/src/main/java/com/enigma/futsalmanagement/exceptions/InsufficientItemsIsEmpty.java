package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class InsufficientItemsIsEmpty extends RuntimeException{
    public InsufficientItemsIsEmpty() {
        super(ExceptionConstants.ITEM_IS_EMPTY);
    }
}
