package com.enigma.futsalmanagement.specification;

import com.enigma.futsalmanagement.entites.Stadium;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Collection;

public class StadiumSpecification {
    public static Specification<Stadium> findByCriteria(Stadium stadium) {
        return new Specification<Stadium>() {

            @Override
            public Predicate toPredicate(Root<Stadium> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                final Collection<Predicate> predicates = new ArrayList<>();

                if (!StringUtils.isEmpty(stadium.getStadiumName())) {
                    final Predicate stadiumNamePredicate = criteriaBuilder
                            .like(criteriaBuilder
                                    .lower(root
                                            .get("stadiumName")),"%"+stadium.getStadiumName()+"%");
                    predicates.add(stadiumNamePredicate);
                }
                if (!StringUtils.isEmpty(stadium.getAddress())) {
                    final Predicate stadiumNamePredicate = criteriaBuilder
                            .like(criteriaBuilder
                                    .lower(root
                                            .get("address")),"%"+stadium.getAddress()+"%");
                    predicates.add(stadiumNamePredicate);
                }
                if (!StringUtils.isEmpty(stadium.getUsers())) {
                    final Predicate stadiumNamePredicate = criteriaBuilder
                            .like(criteriaBuilder
                                    .lower(root
                                            .get("address")),"%"+stadium.getUsers()+"%");
                    predicates.add(stadiumNamePredicate);
                }
                return criteriaBuilder.or(predicates.toArray(new Predicate[0]));
            }
        };
    }
}