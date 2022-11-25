package tech.timely.timelyapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.timely.timelyapp.model.Timely;
import tech.timely.timelyapp.repo.TimelyRepo;

import java.util.List;
import java.util.UUID;

@Service
public class TimelyService {
    private final TimelyRepo timelyRepo;

    @Autowired
    public TimelyService(TimelyRepo timelyRepo) {
        this.timelyRepo = timelyRepo;
    }

    public Timely addTimely(Timely timely){
        timely.setTimelyCode(UUID.randomUUID().toString());
        return timelyRepo.save(timely);
    }

    public List<Timely> findAllTimelies(){
        return timelyRepo.findAll();
    }

    public void deleteTimely(Long id){
        timelyRepo.deleteById(id);
    }


}
