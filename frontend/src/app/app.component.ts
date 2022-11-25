import { Component, OnInit } from '@angular/core';
import { Timely } from './timely';
import { TimelyService } from './timely.service';
import { HttpErrorResponse } from '@angular/common/http';
import {addTimely}from './timely';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public timelies!: Timely[];
  public addTimely!: addTimely;
  public deleteTimely!: Timely;

  constructor(private timelyService: TimelyService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.timelyService.getTimely().subscribe(
      (response: Timely[]) => {
        this.timelies = response;
        console.log(this.timelies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onAddTimely(timely: addTimely): void {
    this.timelyService.addEmployee(timely).subscribe(
      (response: Timely) => {
        console.log(response);
        this.getEmployees();        
      },

      (error: HttpErrorResponse) => {
        alert(error.message);  
      }
    );
  }

   
  public onDeleteTimely(employeeId: number): void {
    this.timelyService.deleteTimely(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  isDisabled1: boolean = false;
  isDisabled2: boolean =true;
  inputDisabled: boolean = true;
  isDisabled3: boolean =true;

  

  counter: any=0;

  ms: any='0'+0;
  sec:any='0'+0;
  min:any='0'+0;
  hr:any='0'+0;

  startTimer: any;
  running= false;



  dateTime1:any;
  dateTime2:any;


  handleClick1(){
    this.isDisabled1=true;
    if(this.isDisabled1==true){
      this.isDisabled2=false;
      }
    
    if(!this.running){
      this.running= true;
      this.startTimer=setInterval(() => {
        this.ms++;
        this.ms=this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }

        if(this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }

        if(this.sec === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      },10);
    }
    
    this.dateTime1 = new Date().toLocaleString();

    this.counter++;

  }

  handleClick2(){
    this.isDisabled2=true;

    if(this.isDisabled2==true){
      this.inputDisabled=false;
      this.isDisabled3=false;
      }
    
    clearInterval(this.startTimer);
    this.running=false; 
    
    this.dateTime2 = new Date().toLocaleString();

  }
  

  str_hr:string='';
  str_min:string='';
  str_sec:string='';
  str: string='';
  
  inpValue: string='';
  
  


  handleClick3(){
  
    this.isDisabled3=true;
    this.inputDisabled=true;
    this.isDisabled1=false;

    this.str_hr=String(this.hr);
    this.str_min=String(this.min);
    this.str_sec=String(this.sec);
    this.str=this.str_hr+"h : "+this.str_min+"min : "+this.str_sec+"s";

    
    this.ms='0'+0;
    this.sec='0'+0;
    this.min='0'+0;
    this.hr='0'+0;

    
    if(this.inpValue==''){
      alert("Project name required!");
    }

    

    else if(this.inpValue!=''){


      this.addTimely={
      prName: this.inpValue,
      startTime:this.dateTime1,
      stopTime:this.dateTime2,
      duration:this.str}


      this.onAddTimely(this.addTimely);
    }


    this.inpValue = '';

    


    return this.inpValue;
  }

}




