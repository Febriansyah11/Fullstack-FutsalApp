package com.enigma.futsalmanagement.specification;

import com.enigma.futsalmanagement.entites.Booking;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Collection;

public class BookingSpecification {
    public static Specification<Booking> findByCriteria(Booking booking) {
        return new Specification<Booking>() {
            @Override
            public Predicate toPredicate(Root<Booking> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                final Collection<Predicate> predicates = new ArrayList<>();

                if (!StringUtils.isEmpty(booking.getIdBooking())) {
                    final Predicate bookingIdPredicate = criteriaBuilder
                            .like(criteriaBuilder
                                    .lower(root
                                            .get("idBooking")),"%"+booking.getIdBooking()+"%");
                    predicates.add(bookingIdPredicate);
                }
                return criteriaBuilder.or(predicates.toArray(new Predicate[0]));
            }
        };
    }
}
