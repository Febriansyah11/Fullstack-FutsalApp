package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Payment;
import com.enigma.futsalmanagement.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @PostMapping("/payment")
    public Payment pay(@RequestBody Payment payment) {
        return paymentService.pay(payment);
    }

    @GetMapping("/payments")
    public List<Payment> getAllPayment() {
        return paymentService.findAllPayment();
    }
}
