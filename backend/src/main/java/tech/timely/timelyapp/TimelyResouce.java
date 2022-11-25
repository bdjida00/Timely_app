package tech.timely.timelyapp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.timely.timelyapp.model.Timely;
import tech.timely.timelyapp.service.TimelyService;

import java.util.List;

@RestController
@RequestMapping("/timely")
public class TimelyResouce {
    private final TimelyService timelyService;

    public TimelyResouce(TimelyService timelyService) {
        this.timelyService = timelyService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Timely>> getAllTimelies(){
        List<Timely> timelies = timelyService.findAllTimelies();
        return new ResponseEntity<>(timelies, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Timely> addTimely(@RequestBody Timely timely){
        Timely newTimely = timelyService.addTimely(timely);
        return new ResponseEntity<>(newTimely, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTimely(@PathVariable("id") Long id){
        timelyService.deleteTimely(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
