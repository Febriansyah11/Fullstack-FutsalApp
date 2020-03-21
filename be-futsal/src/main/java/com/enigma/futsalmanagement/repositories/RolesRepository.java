package com.enigma.futsalmanagement.repositories;

import com.enigma.futsalmanagement.entites.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Roles, Integer> {
    Roles findRolesByRolesName(String rolesName);
}
