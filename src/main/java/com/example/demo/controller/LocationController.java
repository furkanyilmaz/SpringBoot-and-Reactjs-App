package com.example.demo.controller;
import com.example.demo.model.Location;
import com.example.demo.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@CrossOrigin
public class LocationController {
    @Autowired
    private LocationService locationService;

    @PostMapping("/add")
    public String add(@RequestBody Location location) {
        locationService.saveLocation(location);
        return "new location is added";
    }

    @GetMapping("/getAll")
    public List<Location> getAllLocations(){
        return locationService.getAllLocations();
    }


}
