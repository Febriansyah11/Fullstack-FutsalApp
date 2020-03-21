package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Stadium;
import com.enigma.futsalmanagement.services.StadiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class StadiumController {
    @Autowired
    StadiumService stadiumService;

    @PostMapping("/stadium")
    public Stadium createNewStadium(@RequestPart MultipartFile file, @RequestPart String stadium) throws IOException {
        return stadiumService.createNewStadium(file, stadium);
    }

    @GetMapping("/stadiums")
    public List<Stadium> stadiums(){
        return stadiumService.findAllStadium();
    }

    @GetMapping("/stadium/{id}")
    public Stadium findStadiumById(@PathVariable String id){
        return stadiumService.findStadiumById(id);
    }

    @GetMapping("/stadiums/criteria")
    public Page <Stadium> searchAllStadiumByKeyword(@RequestParam Integer size, @RequestParam Integer page, @RequestBody Stadium search) {
        Pageable pageable = PageRequest.of(page,size);
        return stadiumService.getAllStadiumBySpecification(search, pageable);
    }

    @PutMapping("/stadium/update")
    public Stadium updateStadium(@RequestPart MultipartFile file, @RequestPart String stadium) throws IOException {
        return stadiumService.createNewStadium(file, stadium);
    }
}