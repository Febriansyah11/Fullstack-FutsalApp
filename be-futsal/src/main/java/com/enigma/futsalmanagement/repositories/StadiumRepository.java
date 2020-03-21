package com.enigma.futsalmanagement.repositories;

import com.enigma.futsalmanagement.entites.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface StadiumRepository extends JpaRepository<Stadium, String>, JpaSpecificationExecutor<Stadium> {
}
