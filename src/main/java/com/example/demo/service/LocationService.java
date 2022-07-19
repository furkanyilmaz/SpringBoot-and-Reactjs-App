package com.example.demo.service;

import com.example.demo.model.Location;

import java.util.List;

public interface LocationService {
    public Location saveLocation(Location location);
    public List<Location> getAllLocations();



}
