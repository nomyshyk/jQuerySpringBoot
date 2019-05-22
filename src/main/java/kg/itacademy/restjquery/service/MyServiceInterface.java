package kg.itacademy.restjquery.service;

import kg.itacademy.restjquery.model.Thing;

import java.util.List;

public interface MyServiceInterface {
    Thing getThing(int id);
    List<Thing> getAllThings();

    Thing addThing(Thing thing);
}
