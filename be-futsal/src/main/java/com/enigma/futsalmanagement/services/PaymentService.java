package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Payment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentService {
    Payment pay(Payment payment);
    List<Payment> findAllPayment();
    Payment findPaymentById(String id);
}
