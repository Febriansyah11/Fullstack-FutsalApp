package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.Constants;
import com.enigma.futsalmanagement.constants.TableConstant;
import com.enigma.futsalmanagement.enums.EnumStatusField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = Field.TABLE_FIELD)
public class Field {
    static final String TABLE_FIELD = "mst_field";
    @Id
    @GeneratedValue(generator = Constants.SYSTEM_UUID)
    @GenericGenerator(name = Constants.SYSTEM_UUID, strategy = Constants.STRATEGY)
    private String idField;

    private String fieldCode;

    private BigDecimal pricePerHour;

    private EnumStatusField statusField;

    @OneToMany(mappedBy = TableConstant.FIELD, cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = TableConstant.ID_STADIUM)
    @JsonIgnore
    private Stadium stadium;

    @Transient
    private String idStadiumTransient;

    public Field() {
    }

    public Field(String fieldCode, @NotNull BigDecimal pricePerHour, EnumStatusField statusField, Stadium stadium) {
        this.fieldCode = fieldCode;
        this.pricePerHour = pricePerHour;
        this.stadium = stadium;
        this.statusField = statusField;
    }

    public String getIdField() {
        return idField;
    }

    public void setIdField(String idField) {
        this.idField = idField;
    }

    public String getFieldCode() {
        return fieldCode;
    }

    public void setFieldCode(String fieldName) {
        this.fieldCode = fieldName;
    }

    public BigDecimal getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public Stadium getStadium() {
        return stadium;
    }

    public void setStadium(Stadium stadium) {
        this.stadium = stadium;
    }

    public String getIdStadiumTransient() {
        return idStadiumTransient;
    }

    public void setIdStadiumTransient(String idStadiumTransient) {
        this.idStadiumTransient = idStadiumTransient;
    }

    public EnumStatusField getStatusField() {
        return statusField;
    }

    public void setStatusField(EnumStatusField statusField) {
        this.statusField = statusField;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}