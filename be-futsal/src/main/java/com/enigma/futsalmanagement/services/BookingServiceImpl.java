package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.*;
import com.enigma.futsalmanagement.enums.EnumStatusBooking;
import com.enigma.futsalmanagement.enums.EnumStatusField;
import com.enigma.futsalmanagement.enums.EnumStatusPayment;
import com.enigma.futsalmanagement.exceptions.InsufficientFieldIsUnderRepair;
import com.enigma.futsalmanagement.repositories.BookingRepository;
import com.enigma.futsalmanagement.specification.BookingSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    UserService userService;
    @Autowired
    FieldService fieldService;

    @Override
    public Booking booking(Booking booking) {
        Users user = userService.findById(booking.getUserIdTransient());
        Field field = fieldService.findFieldById(booking.getFieldIdTransient());

        if (field.getStatusField() == EnumStatusField.NO_ACTIVE) {
            throw new InsufficientFieldIsUnderRepair();
        } else {
            booking.setUsers(user);
            booking.setField(field);
            booking.setStatusBooking(EnumStatusBooking.BOOKING);
            booking.setStatusPayment(EnumStatusPayment.UNPAID);
            booking.setCreatedAt(new Date());

            BigDecimal countTotal = calculateTotalBooking(booking);
            booking.setTotalPrice(countTotal);

            return bookingRepository.save(booking);
        }

    }

    private BigDecimal calculateTotalBooking(Booking booking) {
        String[] timeStart = booking.getTimePlaceStart().split(":");
        String[] timeEnd = booking.getTimePlaceEnd().split(":");
        Integer time = Integer.parseInt(timeEnd[0]) - Integer.parseInt(timeStart[0]);
        return new BigDecimal(time).multiply(booking.getField().getPricePerHour());
    }

    @Override
    public List<Booking> findAllBooking() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking findBookingById(String id) {
        return bookingRepository.findById(id).get();
    }

    @Override
    public Page<Booking> findBookingBySpecification(Booking search, Pageable pageable) {
        return bookingRepository.findAll(BookingSpecification.findByCriteria(search), pageable);
    }

    @Override
    public List<Booking> findAllBookingWithStatusPaymentPay() {
        return bookingRepository.findBookingByStatusPayment(EnumStatusPayment.PAY);
    }
}