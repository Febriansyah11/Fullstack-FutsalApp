package com.enigma.futsalmanagement.entites;

import com.enigma.futsalmanagement.constants.TableConstant;
import org.springframework.context.annotation.Role;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Role(3)
@Table(name = TableConstant.ROLES)
public class Roles {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idRoles;

    private String rolesName;

    @OneToMany(mappedBy = TableConstant.ROLES, cascade = CascadeType.ALL)
    private List<Users> users = new ArrayList<>();

    public List<Users> getUsers() {
        return users;
    }

    public void setUsers(List<Users> users) {
        this.users = users;
    }

    public Roles() {
    }

    public Roles(Integer idRoles, String rolesName) {
        this.idRoles = idRoles;
        this.rolesName = rolesName;
    }

    public Integer getIdRoles() {
        return idRoles;
    }

    public void setIdRoles(Integer idRoles) {
        this.idRoles = idRoles;
    }

    public String getRolesName() {
        return rolesName;
    }

    public void setRolesName(String rolesName) {
        this.rolesName = rolesName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Roles roles = (Roles) o;
        return Objects.equals(idRoles, roles.idRoles) &&
                Objects.equals(rolesName, roles.rolesName) &&
                Objects.equals(roles.users, roles.users);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRoles, rolesName, users);
    }
}
