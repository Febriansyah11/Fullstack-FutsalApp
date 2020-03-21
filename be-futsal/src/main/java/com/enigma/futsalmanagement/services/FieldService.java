package com.enigma.futsalmanagement.services;

import com.enigma.futsalmanagement.entites.Field;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface FieldService {
    Field createNewField(Field field);
    Field saveImageField(MultipartFile multipartFile, String formData) throws IOException;
    Field findFieldById(String id);
    List<Field> findAllFields();
    List<Field> findAllFieldWithStatusPay(int status);
    Field updateField(Field field);
    void deleteField(String id);
}
