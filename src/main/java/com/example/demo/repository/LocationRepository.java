package com.example.demo.repository;

import com.example.demo.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {


   //boolean existByCityAndCounty(String city, String county);
}
