package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.constants.DirectoryFileConstant;
import com.enigma.futsalmanagement.entites.Field;
import com.enigma.futsalmanagement.entites.Stadium;
import com.enigma.futsalmanagement.enums.EnumStatusField;
import com.enigma.futsalmanagement.exceptions.InsufficientFieldNotFound;
import com.enigma.futsalmanagement.repositories.FieldRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class FieldServiceImpl implements FieldService {

    @Autowired
    FieldRepository fieldRepository;
    @Autowired
    StadiumService stadiumService;
    @Autowired
    BookingService bookingService;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public Field findFieldById(String id) {
        try {
            fieldRepository.findById(id).get();
        } catch (Exception e) {
            throw new InsufficientFieldNotFound();
        }
        return fieldRepository.findById(id).get();
    }

    @Override
    public Field createNewField(Field field) {
        Stadium stadium = stadiumService.findStadiumById(field.getIdStadiumTransient());
        field.setStadium(stadium);
        field.setStatusField(EnumStatusField.ACTIVE);
        return fieldRepository.save(field);
    }

    @Override
    public Field saveImageField(MultipartFile file, String requestBody) throws IOException {
        Field field = createNewField(objectMapper.readValue(requestBody, Field.class));
        File upload = new File(DirectoryFileConstant.UPLOAD_IMAGE_FIELD_DIRECTORY + field.getIdField());
        file.transferTo(upload);
        return fieldRepository.save(field);
    }

    @Override
    public Field updateField(Field field) {
        field.setStadium(stadiumService.findStadiumById(field.getIdStadiumTransient()));
        return fieldRepository.save(field);
    }

    @Override
    public void deleteField(String id) {
        try {
            fieldRepository.deleteById(id);
        } catch (Exception e) {
            throw new InsufficientFieldNotFound();
        }
    }

    @Override
    public List<Field> findAllFields() {
        return fieldRepository.findAll();
    }

    @Override
    public List<Field> findAllFieldWithStatusPay(int status) {
        return fieldRepository.findAllByBookingsNativeQuery(status);
    }
}