package com.enigma.futsalmanagement.exceptions;

import com.enigma.futsalmanagement.constants.ExceptionConstants;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.ALREADY_REPORTED)
public class InsufficientUsernameAlready extends RuntimeException{
    public InsufficientUsernameAlready() {
        super(ExceptionConstants.MAKE_SURE_YOUR_EMAIL_USERNAME_NIK_ARE_NOT_DUPLICATED);
    }
}
