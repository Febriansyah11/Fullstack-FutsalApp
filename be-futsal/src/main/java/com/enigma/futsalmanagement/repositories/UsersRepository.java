package com.enigma.futsalmanagement.repositories;

import com.enigma.futsalmanagement.entites.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {
    Users getUsersByUsername(String username);
}