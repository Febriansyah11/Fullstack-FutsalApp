package com.enigma.futsalmanagement.utils;

import com.enigma.futsalmanagement.entites.Roles;
import com.enigma.futsalmanagement.repositories.RolesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DBInit implements CommandLineRunner {
    private RolesRepository rolesRepository;

    public DBInit(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        rolesRepository.deleteAll();

        Roles PLAYER = new Roles(1,"As a Futsal Player");
        Roles MANAGEMENT = new Roles(2,"As a Field Owner");

        List<Roles> roles = Arrays.asList(PLAYER, MANAGEMENT);

        rolesRepository.saveAll(roles);
    }
}