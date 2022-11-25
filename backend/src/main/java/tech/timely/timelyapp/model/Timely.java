package tech.timely.timelyapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Timely implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String prName;
    private String startTime;
    private String stopTime;
    private String duration;
    @Column(nullable = false,updatable = false)
    private String timelyCode;

    public Timely(){}

    public Timely(String prName,String startTime,String stopTime,String duration,String timelyCode){
        this.prName=prName;
        this.startTime=startTime;
        this.stopTime=stopTime;
        this.duration=duration;
        this.timelyCode=timelyCode;
    }

    public Long getId(){
        return id;
    }

    public void setId(){
        this.id=id;
    }

    public String getPrName(){
        return prName;
    }

    public void setPrName(String prName){
        this.prName=prName;
    }

    public String getStartTime(){
        return startTime;
    }

    public void setStartTime(String startTime){
        this.startTime=startTime;
    }

    public String getStopTime(){
        return stopTime;
    }

    public void setStopTime(String stopTime){
        this.stopTime=stopTime;
    }

    public String getDuration(){
        return duration;
    }

    public void setDuration(String duration){
        this.duration=duration;
    }

    public String getTimelyCode(){
        return timelyCode;
    }

    public void setTimelyCode(String timelyCode){
        this.timelyCode=timelyCode;
    }
}