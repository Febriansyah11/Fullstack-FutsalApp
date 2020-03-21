package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Booking;
import com.enigma.futsalmanagement.entites.Payment;
import com.enigma.futsalmanagement.enums.EnumStatusBooking;
import com.enigma.futsalmanagement.enums.EnumStatusPayment;
import com.enigma.futsalmanagement.exceptions.InsufficientBookkeepingIsFinishedPaid;
import com.enigma.futsalmanagement.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    UserService userService;
    @Autowired
    BookingService bookingService;

    @Override
    public Payment pay(Payment payment) {
        try {
            Booking booking = bookingService.findBookingById(payment.getIdBookingTransient());
            booking.setStatusPayment(EnumStatusPayment.PAY);
            booking.setStatusBooking(EnumStatusBooking.BOOKED);
            payment.setBooking(booking);
            payment.setStatusPayment(EnumStatusPayment.PAY);
            payment.setPayDate(new Date());
            paymentRepository.save(payment);
        } catch (Exception e) {
            throw new InsufficientBookkeepingIsFinishedPaid();
        }
        return payment;
    }

    @Override
    public List<Payment> findAllPayment() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment findPaymentById(String id) {
        return paymentRepository.findById(id).get();
    }
}
