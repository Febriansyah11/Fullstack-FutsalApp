package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class InsufficientFieldIsUnderRepair extends RuntimeException {
    public InsufficientFieldIsUnderRepair() {
        super(ExceptionConstants.THE_FIELD_IS_UNDER_REPAIR);
    }
}
