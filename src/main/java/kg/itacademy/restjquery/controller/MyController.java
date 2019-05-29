package kg.itacademy.restjquery.controller;

import kg.itacademy.restjquery.model.Thing;
import kg.itacademy.restjquery.service.MyServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class MyController {

    @Autowired
    private MyServiceInterface myService;

    @CrossOrigin
    @GetMapping("/{id}")
    public Thing getThing(@PathVariable("id") int id)
    {
        return myService.getThing(id);
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<Thing> getAllThings(){
        return myService.getAllThings();
    }

    @CrossOrigin
    @PostMapping
    public Thing addThing(@RequestBody Thing thing){
        return myService.addThing(thing);
    }
}