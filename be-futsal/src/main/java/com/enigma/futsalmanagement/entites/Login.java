package com.enigma.futsalmanagement.entites;

public class Login {

    private String jwt;
    private Integer role;
    private String userId;
    private String userName;

    public Login() {
    }

    public Login(String jwt, Integer role, String userId, String userName) {
        this.jwt = jwt;
        this.role = role;
        this.userId = userId;
        this.userName = userName;
    }
    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
