package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Roles;
import com.enigma.futsalmanagement.exceptions.InsufficientRolesHasAlready;
import com.enigma.futsalmanagement.repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesServiceImpl implements RolesService {
    @Autowired
    RolesRepository rolesRepository;
    @Override
    public Roles createRoles(Roles roles) {
        try {
            rolesRepository.save(roles);
        } catch (Exception e) {
            throw new InsufficientRolesHasAlready();
        }
        return roles;
    }

    @Override
    public Roles findRoleById(Integer idRoles) {
        return rolesRepository.findById(idRoles).get();
    }

    @Override
    public List<Roles> findAllRoles() {
        return rolesRepository.findAll();
    }

}
