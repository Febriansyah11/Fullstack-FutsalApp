package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.Constants;
import com.enigma.futsalmanagement.constants.TableConstant;
import com.enigma.futsalmanagement.enums.EnumStatusBooking;
import com.enigma.futsalmanagement.enums.EnumStatusPayment;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = TableConstant.TRX_BOOKING)
public class Booking {
    @Id
    @GeneratedValue(generator = Constants.SYSTEM_UUID)
    @GenericGenerator(name = Constants.SYSTEM_UUID, strategy = Constants.STRATEGY)
    private String idBooking;

    private EnumStatusBooking statusBooking;
    private EnumStatusPayment statusPayment;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = TableConstant.ID_USER)
    private Users users;

    @ManyToOne
    @JoinColumn(name = TableConstant.ID_FIELD)
    @JsonIgnore
    private Field field;

    @OneToMany(mappedBy = TableConstant.BOOKING, cascade = CascadeType.ALL)
    private List<Payment> paymentList = new ArrayList<>();

//    @OneToMany(mappedBy = TableConstant.BOOKING, cascade = CascadeType.ALL)
//    private List<BookingDetail> bookingDetails = new ArrayList<>();

    @JsonFormat(pattern = TableConstant.DATE_FORMAT)
    private Date bookingDate;

    private String timePlaceStart;
    private String timePlaceEnd;
    private BigDecimal totalPrice;

    @JsonFormat(pattern = TableConstant.DATE_TIME_FORMAT, timezone = TableConstant.TIME_ZONE_ASIA_JAKARTA)
    private Date createdAt;

    @Transient
    private String fieldIdTransient;

    @Transient
    private String userIdTransient;

    public Booking() {
    }

    public Booking(Users users, Field field, Date bookingDate, String timePlaceStart, String timePlaceEnd, BigDecimal totalPrice, String fieldIdTransient, String userIdTransient) {
        this.users = users;
        this.field = field;
        this.bookingDate = bookingDate;
        this.timePlaceStart = timePlaceStart;
        this.timePlaceEnd = timePlaceEnd;
        this.totalPrice = totalPrice;
        this.fieldIdTransient = fieldIdTransient;
        this.userIdTransient = userIdTransient;
    }

    public String getIdBooking() {
        return idBooking;
    }

    public void setIdBooking(String idBooking) {
        this.idBooking = idBooking;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users user) {
        this.users = user;
    }

    public Field getField() {
        return field;
    }

    public void setField(Field field) {
        this.field = field;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getTimePlaceStart() {
        return timePlaceStart;
    }

    public void setTimePlaceStart(String timePlaceStart) {
        this.timePlaceStart = timePlaceStart;
    }

    public String getTimePlaceEnd() {
        return timePlaceEnd;
    }

    public void setTimePlaceEnd(String timePlaceEnd) {
        this.timePlaceEnd = timePlaceEnd;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getFieldIdTransient() {
        return fieldIdTransient;
    }

    public void setFieldIdTransient(String fieldIdTransient) {
        this.fieldIdTransient = fieldIdTransient;
    }

    public String getUserIdTransient() {
        return userIdTransient;
    }

    public void setUserIdTransient(String userIdTransient) {
        this.userIdTransient = userIdTransient;
    }

    public List<Payment> getPaymentList() {
        return paymentList;
    }

    public void setPaymentList(List<Payment> paymentList) {
        this.paymentList = paymentList;
    }

    public EnumStatusBooking getStatusBooking() {
        return statusBooking;
    }

    public void setStatusBooking(EnumStatusBooking statusBooking) {
        this.statusBooking = statusBooking;
    }

    public EnumStatusPayment getStatusPayment() {
        return statusPayment;
    }

    public void setStatusPayment(EnumStatusPayment statusPayment) {
        this.statusPayment = statusPayment;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}