package com.enigma.futsalmanagement.repositories;

import com.enigma.futsalmanagement.entites.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FieldRepository extends JpaRepository<Field, String> {
    @Query(
            nativeQuery = true,
            value = "select * from mst_field " +
                    "inner join trx_booking on mst_field.id_field = trx_booking.id_field " +
                    "inner join trx_payment on trx_booking.id_booking = trx_payment.id_booking " +
                    "where trx_payment.status_payment = ?0;"
    )
//    @Query(
//            value = "SELECT * FROM mst_field " +
//                    "INNER JOIN trx_booking " +
//                    "ON mst_field.id_field = trx_booking.id_field " +
//                    "WHERE trx_booking.status_payment = 0",
//            nativeQuery = true)
    List<Field> findAllByBookingsNativeQuery(int status);
}