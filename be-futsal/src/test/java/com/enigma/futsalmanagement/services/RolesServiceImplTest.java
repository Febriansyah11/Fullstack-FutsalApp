//package com.enigma.futsalmanagement.services;
//
//import com.enigma.futsalmanagement.constants.ExceptionConstants;
//import com.enigma.futsalmanagement.constants.ServiceRolesConstant;
//import com.enigma.futsalmanagement.entites.Roles;
//import com.enigma.futsalmanagement.exceptions.InsufficientRolesHasAlready;
//import com.enigma.futsalmanagement.repositories.RolesRepository;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.HttpStatus;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.junit.Assert.assertEquals;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class RolesServiceImplTest {
//
//    @Autowired
//    RolesRepository rolesRepository;
//    @Autowired
//    RolesService rolesService;
//
//    @Before
//    public void clearAll() {
//        rolesRepository.deleteAll();
//    }
//
//    public void createRoles_should_created_one_role_ADMIN() {
//        Roles admin = new Roles();
//        admin.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(admin);
//        assertEquals(1, rolesRepository.findAll().size());
//    }
//
//    @Test
//    public void createRoles_should_created_one_role_USER() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(roles);
//        assertEquals(1, rolesRepository.findAll().size());
//    }
//
//    @Test
//    public void findRoleById_should_return_roles_by_id() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(roles);
//        assertEquals(roles, rolesRepository.findById(roles.getIdRoles()).get());
//    }
//
//    @Test
//    public void findAllRoles_should_given_all_roles() {
//        Roles admin = new Roles();
//        Roles user = new Roles();
//        admin.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        user.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(admin);
//        rolesService.createRoles(user);
//        assertEquals(2, rolesRepository.findAll().size());
//    }
//}