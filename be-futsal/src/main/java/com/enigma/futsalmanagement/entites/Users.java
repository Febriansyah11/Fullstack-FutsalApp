package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.Constants;
import com.enigma.futsalmanagement.constants.TableConstant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Entity
@Table(name = TableConstant.MST_USERS)
public class Users {

    @Id
    @GeneratedValue(generator = Constants.SYSTEM_UUID)
    @GenericGenerator(name = Constants.SYSTEM_UUID, strategy = Constants.STRATEGY)
    private String idUser;

    @NotNull
    private String name;

    @Column(unique = true)
    private String username;

    private String password;

    @Email(message = "Please provide a valid email address")
    @Pattern(regexp = ".+@.+\\..+", message = "Please provide a valid email address")
    @NotNull
    @Column(unique = true)
    private String email;

    @NotNull
    private String address;
    @NotNull
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = TableConstant.ID_ROLES)
    @JsonIgnore
    private Roles roles;

    @OneToMany(mappedBy = TableConstant.USERS, cascade = CascadeType.ALL)
    private List<Stadium> stadiums = new ArrayList<>();

    @OneToMany(mappedBy = TableConstant.USERS, cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<>();

    @Transient
    private Integer idRolesTransient;

    public Users() {
    }

    public Users(@NotNull String name, String username, String password, @Email(message = "Please provide a valid email address") @Pattern(regexp = ".+@.+\\..+", message = "Please provide a valid email address") @NotNull String email, @NotNull String address, @NotNull String phoneNumber) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }

    public List<Stadium> getStadiums() {
        return stadiums;
    }

    public void setStadiums(List<Stadium> stadiums) {
        this.stadiums = stadiums;
    }

    public Integer getIdRolesTransient() {
        return idRolesTransient;
    }

    public void setIdRolesTransient(Integer idRolesTransient) {
        this.idRolesTransient = idRolesTransient;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Users users = (Users) o;
        return Objects.equals(idUser, users.idUser) &&
                Objects.equals(name, users.name) &&
                Objects.equals(username, users.username) &&
                Objects.equals(password, users.password) &&
                Objects.equals(email, users.email) &&
                Objects.equals(address, users.address) &&
                Objects.equals(phoneNumber, users.phoneNumber) &&
                Objects.equals(users.roles, users.roles) &&
                Objects.equals(users.stadiums, users.stadiums);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, name, username, password, email, address, phoneNumber, roles);
    }
}
