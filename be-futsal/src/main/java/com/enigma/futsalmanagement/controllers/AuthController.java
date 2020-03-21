package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Login;
import com.enigma.futsalmanagement.entites.Users;
import com.enigma.futsalmanagement.security.MyUserDetailsService;
import com.enigma.futsalmanagement.security.UserPrincipal;
import com.enigma.futsalmanagement.utils.AuthenticationResponse;
import com.enigma.futsalmanagement.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;

@RestController
@CrossOrigin
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    MyUserDetailsService userDetailsService;

    @PermitAll
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users users) throws Exception{
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(users.getUsername(), users.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserPrincipal userDetails = (UserPrincipal) userDetailsService
                .loadUserByUsername(users.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        Login login = new Login(jwt,
                userDetails.getUsers().getRoles().getIdRoles(),
                userDetails.getUsers().getIdUser(),
                userDetails.getUsers().getName());
        return ResponseEntity.ok(login);
    }


    @PostMapping("/logout")
    public void logout(@RequestBody String token) throws Exception{
    }
}

