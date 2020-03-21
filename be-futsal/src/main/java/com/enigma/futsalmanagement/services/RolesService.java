package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Roles;

import java.util.List;

public interface RolesService {
    Roles createRoles(Roles roles);
    Roles findRoleById(Integer idRoles);
    List<Roles> findAllRoles();
}
