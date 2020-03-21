package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Login;
import com.enigma.futsalmanagement.entites.Users;
import com.enigma.futsalmanagement.security.MyUserDetailsService;
import com.enigma.futsalmanagement.security.UserPrincipal;
import com.enigma.futsalmanagement.services.UserService;
import com.enigma.futsalmanagement.utils.AuthenticationResponse;
import com.enigma.futsalmanagement.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    MyUserDetailsService userDetailsService;


    @PostMapping("/user")
    public Users saveNewUser(@RequestPart MultipartFile file,
                             @RequestPart String user) throws IOException {
        return userService.saveNewUser(file, user);
    }

    @PostMapping("/user/profile")
    public Users saveUser(@RequestBody Users users) {
        return userService.createUser(users);
    }

    @RolesAllowed("ADMIN")
    @PutMapping("/user")
    public Users updateUser(@RequestBody Users user){
        return userService.updateUser(user);
    }

    @GetMapping("/users")
    public List<Users> findAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public Users findUserById(@PathVariable String id) {
        return userService.findById(id);
    }

    @DeleteMapping("/user/{id}")
    public void deleteUserById(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
