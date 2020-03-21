//package com.enigma.futsalmanagement.controllers;
//
//import com.enigma.futsalmanagement.entites.Field;
//import com.enigma.futsalmanagement.repositories.FieldRepository;
//import org.junit.After;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class FieldControllerTest {
//    @Autowired
//    FieldRepository fieldRepository;
//    @Autowired
//    MockMvc mockMvc;
//
//    @Before
//    public void setUp() throws Exception {
//        fieldRepository.deleteAll();
//    }
//
//    @After
//    public void tearDown() throws Exception {
//        fieldRepository.deleteAll();
//    }
//
//    @Test
//    public void findFieldById() {
//    }
//
//    @Test
//    public void findAllFields() {
//    }
//}
