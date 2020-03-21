package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class InsufficientRolesHasAlready extends RuntimeException {
    public InsufficientRolesHasAlready() {
        super(ExceptionConstants.ROLES_HAS_ALREADY);
    }
}