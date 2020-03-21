package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.constants.DirectoryFileConstant;
import com.enigma.futsalmanagement.entites.Stadium;
import com.enigma.futsalmanagement.entites.Users;
import com.enigma.futsalmanagement.exceptions.InsufficientStadiumNotFound;
import com.enigma.futsalmanagement.repositories.StadiumRepository;
import com.enigma.futsalmanagement.specification.StadiumSpecification;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class StadiumServiceImpl implements StadiumService {

    @Autowired
    StadiumRepository stadiumRepository;
    @Autowired
    UserService userService;
    @Autowired
    FieldService fieldService;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public Stadium createStadium(Stadium stadium) {
        Users users = userService.findById(stadium.getIdUserTransient());
        stadium.setUsers(users);
        return stadiumRepository.save(stadium);
    }

    @Override
    public Stadium createNewStadium(MultipartFile file, String requestBody) throws IOException {
        Stadium stadium = createStadium(objectMapper.readValue(requestBody, Stadium.class));
        File upload = new File(DirectoryFileConstant.UPLOAD_IMAGE_STADIUM_DIRECTORY + stadium.getIdStadium());
        file.transferTo(upload);
        return stadiumRepository.save(stadium);
    }

    @Override
    public List<Stadium> findAllStadium() {
        return stadiumRepository.findAll();
    }

    @Override
    public Stadium findStadiumById(String idStadium) {
        try {
            stadiumRepository.findById(idStadium).get();
        } catch (Exception e) {
            throw new InsufficientStadiumNotFound();
        }
        return stadiumRepository.findById(idStadium).get();
    }

    @Override
    public Page<Stadium> getAllStadiumBySpecification(Stadium search, Pageable pageable) {
        return stadiumRepository.findAll(StadiumSpecification.findByCriteria(search), pageable);
    }
}
