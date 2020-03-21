package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Booking;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface BookingService {
    Booking booking(Booking booking);
    List<Booking> findAllBooking();
    List<Booking> findAllBookingWithStatusPaymentPay();
    Booking findBookingById(String id);
    Page <Booking> findBookingBySpecification(Booking search, Pageable pageable);
}