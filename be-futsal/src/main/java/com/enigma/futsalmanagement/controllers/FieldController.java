package com.enigma.futsalmanagement.controllers;

import com.enigma.futsalmanagement.entites.Field;
import com.enigma.futsalmanagement.services.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class FieldController {

    @Autowired
    FieldService fieldService;

    @GetMapping("/field/{id}")
    public Field findFieldById(@PathVariable String id) {
        return fieldService.findFieldById(id);
    }

    @GetMapping("/fields")
    public List<Field> findAllFields() {
        return fieldService.findAllFields();
    }

    @GetMapping("/fields/pay/{status}")
    public List<Field> findAllFieldsWithStatusPaymentPay(@PathVariable("status") int status) {
        return fieldService.findAllFieldWithStatusPay(status);
    }

    @PostMapping("/field")
    public Field saveField(@RequestPart MultipartFile file, @RequestPart String field) throws IOException {
        return fieldService.saveImageField(file, field);
    }

    @PutMapping("/field")
    public Field updateField(@RequestBody Field field) {
        return fieldService.updateField(field);
    }

    @DeleteMapping("/field/{id}")
    public void deleteFieldById(@PathVariable String id) {
        fieldService.deleteField(id);
    }
}