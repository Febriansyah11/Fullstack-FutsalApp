package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Roles;
import com.enigma.futsalmanagement.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class RolesController {
    @Autowired
    RolesService rolesService;

    @PermitAll
    @CrossOrigin
    @PostMapping("/role")
    public Roles roles(@RequestBody Roles roles){
        return rolesService.createRoles(roles);
    }

    @PermitAll
    @CrossOrigin
    @GetMapping("/roles")
    public List<Roles> roles(){
        return rolesService.findAllRoles();
    }
}
