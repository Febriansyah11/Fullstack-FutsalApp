//package com.enigma.futsalmanagement.controllers;
//
//import com.enigma.futsalmanagement.entites.Roles;
//import com.enigma.futsalmanagement.entites.Users;
//import com.enigma.futsalmanagement.repositories.RolesRepository;
//import com.enigma.futsalmanagement.repositories.UsersRepository;
//import com.enigma.futsalmanagement.services.RolesService;
//import com.enigma.futsalmanagement.services.UserService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.After;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class RolesControllerTest {
//
//    @Autowired
//    RolesRepository rolesRepository;
//    @MockBean
//    RolesService rolesService;
//    @Autowired
//    UsersRepository usersRepository;
//    @Autowired
//    MockMvc mockMvc;
//    ObjectMapper objectMapper = new ObjectMapper();
//
//    private static final String USER_ROLES = "USER";
//    private static final String NAME = "John Doe";
//    private static final String USERNAME = "john";
//    private static final String PASSWORD = "12345678";
//    private static final String EMAIL = "johndoe@gmail.com";
//    private static final String ADDRESS = "AA Street No 9";
//    private static final String PHONE_NUMBER = "089607986912";
//    @Before
//    public void clean(){
//        rolesRepository.deleteAll();;
//        usersRepository.deleteAll();
//    }
//    @After
//    public void tearDown(){
//        rolesRepository.deleteAll();
//        usersRepository.deleteAll();
//    }
//
//
//    @Test
//    public void roles() throws Exception {
////        Roles userRoles = new Roles(USER_ROLES);
////        userRoles = rolesRepository.save(userRoles);
////        Users myUser = new Users(NAME, USERNAME, PASSWORD, EMAIL, ADDRESS, PHONE_NUMBER);
////        myUser = usersRepository.save(myUser);
//    }
//
//    @Test
//    public void testRoles() {
//    }
//}
