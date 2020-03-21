package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.Constants;
import com.enigma.futsalmanagement.constants.TableConstant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = TableConstant.MST_STADIUM)
public class Stadium {
    @Id
    @GeneratedValue(generator = Constants.SYSTEM_UUID)
    @GenericGenerator(name = Constants.SYSTEM_UUID, strategy = Constants.STRATEGY)
    private String idStadium;

    private String stadiumName;
    private String address;
    private String openingHours;
    private String closingHours;
    private String longitude;
    private String latitude;

    @ManyToOne
    @JoinColumn(name = TableConstant.ID_USER)
    @JsonIgnore
    private Users users;

    @OneToMany(mappedBy = TableConstant.STADIUM, cascade = CascadeType.ALL)
    private List<Field> fields = new ArrayList<>();

    @Transient
    private String idUserTransient;

    public Stadium() {
    }

    public Stadium(String stadiumName, String address, String longitude, String latitude, Users users) {
        this.stadiumName = stadiumName;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.users = users;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getIdUserTransient() {
        return idUserTransient;
    }

    public void setIdUserTransient(String idUserTransient) {
        this.idUserTransient = idUserTransient;
    }

    public String getIdStadium() {
        return idStadium;
    }

    public void setIdStadium(String idStadium) {
        this.idStadium = idStadium;
    }

    public String getStadiumName() {
        return stadiumName;
    }

    public void setStadiumName(String stadiumName) {
        this.stadiumName = stadiumName;
    }

    public List<Field> getFields() {
        return fields;
    }

    public void setFields(List<Field> fields) {
        this.fields = fields;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public String getClosingHours() {
        return closingHours;
    }

    public void setClosingHours(String closingHours) {
        this.closingHours = closingHours;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stadium stadium = (Stadium) o;
        return Objects.equals(idStadium, stadium.idStadium) &&
                Objects.equals(stadiumName, stadium.stadiumName) &&
                Objects.equals(address, stadium.address) &&
                Objects.equals(users, stadium.users) &&
                Objects.equals(idUserTransient, stadium.idUserTransient) &&
                Objects.equals(fields, stadium.fields);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idStadium, stadiumName, address, users, idUserTransient, fields);
    }
}
