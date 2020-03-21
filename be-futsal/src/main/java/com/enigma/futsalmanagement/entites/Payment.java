package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.Constants;
import com.enigma.futsalmanagement.constants.TableConstant;
import com.enigma.futsalmanagement.enums.EnumStatusPayment;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = TableConstant.TRX_PAYMENT, uniqueConstraints = {@UniqueConstraint(columnNames = {TableConstant.ID_BOOKING})})
public class Payment {

    @Id
    @GeneratedValue(generator = Constants.SYSTEM_UUID)
    @GenericGenerator(name = Constants.SYSTEM_UUID, strategy = Constants.STRATEGY)
    private String idPayment;

    private EnumStatusPayment statusPayment;

    @JsonFormat(pattern = TableConstant.DATE_TIME_FORMAT, timezone = TableConstant.TIME_ZONE_ASIA_JAKARTA)
    private Date payDate;

    @ManyToOne
    @JoinColumn(name = TableConstant.ID_BOOKING, unique = true)
    @JsonIgnore
    private Booking booking;

    @Transient
    private String idBookingTransient;

    public Payment() {
    }

    public Payment(EnumStatusPayment statusPayment, Booking booking) {
        this.statusPayment = statusPayment;
        this.booking = booking;
    }

    public String getIdPayment() {
        return idPayment;
    }

    public void setIdPayment(String idPayment) {
        this.idPayment = idPayment;
    }

    public EnumStatusPayment getStatusPayment() {
        return statusPayment;
    }

    public void setStatusPayment(EnumStatusPayment statusPayment) {
        this.statusPayment = statusPayment;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public String getIdBookingTransient() {
        return idBookingTransient;
    }

    public void setIdBookingTransient(String idBookingTransient) {
        this.idBookingTransient = idBookingTransient;
    }

    public Date getPayDate() {
        return payDate;
    }

    public void setPayDate(Date payDate) {
        this.payDate = payDate;
    }
}
