//package com.enigma.futsalmanagement.controllers;
//
//import com.enigma.futsalmanagement.entites.Users;
//import com.enigma.futsalmanagement.repositories.UsersRepository;
//import com.enigma.futsalmanagement.services.UserService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.After;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//    import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//    import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class UserControllerTest {
//    private static final String NAME = "John Doe";
//    private static final String USERNAME = "john";
//    private static final String PASSWORD = "12345678";
//    private static final String EMAIL = "johndoe@gmail.com";
//    private static final String ADDRESS = "AA Street No 9";
//    private static final String PHONE_NUMBER = "089607986912";
//
//    @Autowired
//    UsersRepository usersRepository;
//    @Autowired
//    UserService userService;
//    @Autowired
//    MockMvc mockMvc;
//
//    ObjectMapper objectMapper = new ObjectMapper();
//
//    @Before
//    public void setUp(){
//        usersRepository.deleteAll();
//    }
//    @After
//    public void tearDown(){
//        usersRepository.deleteAll();
//    }
//
//    @Test
//    public void user_should_return_Status_OK()throws Exception {
//        Users myUser = new Users(NAME, USERNAME, PASSWORD, EMAIL, ADDRESS, PHONE_NUMBER);
//        mockMvc.perform(post("/user").contentType(MediaType.APPLICATION_JSON)
//        .content(objectMapper.writeValueAsString(myUser))).andExpect(status().isOk());
//    }
//
//}
