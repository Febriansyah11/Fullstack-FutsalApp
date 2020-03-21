package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Stadium;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StadiumService {
    Stadium createStadium(Stadium stadium);
    Stadium createNewStadium(MultipartFile multipartFile, String stadium) throws IOException;
    List<Stadium> findAllStadium();
    Stadium findStadiumById(String idStadium);
    Page <Stadium> getAllStadiumBySpecification(Stadium search, Pageable pageable);
}
