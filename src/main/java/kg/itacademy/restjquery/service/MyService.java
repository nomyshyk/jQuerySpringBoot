package kg.itacademy.restjquery.service;

import kg.itacademy.restjquery.model.Thing;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyService implements MyServiceInterface{

    private static List<Thing> things = new ArrayList<>();

    static {
        things.add(new Thing(1,"Бишкек"));
        things.add(new Thing(2,"Алматы"));
        things.add(new Thing(3,"Ташкент"));
    }

    public Thing getThing(int id){
        return
                things.stream().filter(p -> p.getId()==id)
                        .findFirst().get();
    }

    public List<Thing> getAllThings(){
        return things;
    }

    @Override
    public Thing addThing(Thing thing) {
        things.add(thing);
        return thing;
    }
}
