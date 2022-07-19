package com.example.demo.service;
import com.example.demo.model.Location;
import com.example.demo.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private LocationRepository locationRepository;

    @Override
    public Location saveLocation(Location location) {

//        if (locationRepository.existByCityAndCounty(location.getCity(), location.getCounty())) {
//            throw new RuntimeException("location is already exists");
//        }
        return locationRepository.save(location);

    }

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

}
