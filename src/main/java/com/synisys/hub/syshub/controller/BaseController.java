package com.synisys.hub.syshub.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/sishub")
public class BaseController {
    @RequestMapping(path = "/load", method = RequestMethod.POST)
    public void loadData() {
        System.out.println("asdasd");
    }
}
