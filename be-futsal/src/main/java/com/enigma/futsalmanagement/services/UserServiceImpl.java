package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.constants.DirectoryFileConstant;
import com.enigma.futsalmanagement.entites.Roles;
import com.enigma.futsalmanagement.entites.Users;
import com.enigma.futsalmanagement.exceptions.InsufficientUserSuccessDeleted;
import com.enigma.futsalmanagement.exceptions.InsufficientUsersNotFound;
import com.enigma.futsalmanagement.repositories.UsersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    RolesService rolesService;

    @Override
    public Users createUser(Users users) {
        Roles roles = rolesService.findRoleById(users.getIdRolesTransient());
        users.setRoles(roles);
        return usersRepository.save(users);
    }

    @Override
    public Users saveNewUser(MultipartFile file, String requestBody) throws IOException {
        Users users = createUser(objectMapper.readValue(requestBody, Users.class));
        File upload = new File(DirectoryFileConstant.UPLOAD_IMAGE_USERS + users.getIdUser());
        file.transferTo(upload);
        return usersRepository.save(users);
    }

    @Override
    public Users findById(String id) {
        try {
            usersRepository.findById(id).get();
        } catch (Exception e) {
            throw new InsufficientUsersNotFound();
        }
        return usersRepository.findById(id).get();
    }


    @Override
    public Users updateUser(Users users) {
        Users user = findById(users.getIdUser());
        user.setName(users.getName());
        user.setUsername(users.getUsername());
        user.setPassword(users.getPassword());
        user.setEmail(users.getEmail());
        user.setAddress(users.getAddress());
        user.setPhoneNumber(users.getPhoneNumber());
        return usersRepository.save(users);
    }

    @Override
    public void deleteUser(String id) {
        try {
            usersRepository.deleteById(id);
        } catch (Exception e) {
            throw new InsufficientUserSuccessDeleted();
        }

    }

    @Override
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }
}
