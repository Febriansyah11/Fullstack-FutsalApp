package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Users;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {
    Users findById(String id);
    Users createUser(Users users);
    List<Users> getAllUsers();
    Users saveNewUser(MultipartFile multipartFile, String user) throws IOException;
    Users updateUser(Users otherUser);
    void deleteUser(String user);
}
