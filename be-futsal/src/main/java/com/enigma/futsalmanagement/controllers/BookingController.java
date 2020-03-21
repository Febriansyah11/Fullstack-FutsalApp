package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Booking;
import com.enigma.futsalmanagement.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/booking")
    public Booking booking (@RequestBody Booking booking) {
        return bookingService.booking(booking);
    }

    @GetMapping("/bookings")
    public List<Booking> getAllBooking () {
        return bookingService.findAllBooking();
    }

    @GetMapping("/booking/{id}")
    public Booking findBookingById(@PathVariable String id) {
        return bookingService.findBookingById(id);
    }

    @GetMapping("/booking/criteria")
    public Page<Booking> searchBooking(@RequestParam Integer size, @RequestParam Integer page, @RequestBody Booking keyword) {
        Pageable pageable = PageRequest.of(page,size);
        return bookingService.findBookingBySpecification(keyword, pageable);
    }

    @GetMapping("/bookings/pay")
    public List<Booking> findAllBookingWithStatusPaymentPay() {
        return bookingService.findAllBookingWithStatusPaymentPay();
    }
}