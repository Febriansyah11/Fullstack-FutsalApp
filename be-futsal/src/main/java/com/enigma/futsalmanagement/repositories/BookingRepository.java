package com.enigma.futsalmanagement.repositories;

import com.enigma.futsalmanagement.entites.Booking;
import com.enigma.futsalmanagement.enums.EnumStatusPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, String>, JpaSpecificationExecutor<Booking> {
    List<Booking> findBookingByStatusPayment(EnumStatusPayment statusPayment);
}