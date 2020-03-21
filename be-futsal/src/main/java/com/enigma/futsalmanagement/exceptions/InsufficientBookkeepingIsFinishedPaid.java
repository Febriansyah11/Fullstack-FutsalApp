package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class InsufficientBookkeepingIsFinishedPaid extends RuntimeException {
    public InsufficientBookkeepingIsFinishedPaid() {
        super(ExceptionConstants.BOOKKEEPING_IS_FINISHED_PAID);
    }
}
