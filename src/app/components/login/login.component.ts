import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  login:any=FormGroup;
  users:any=[];
  constructor(private fd:FormBuilder,private router:Router, private commserv:CommonService) { }

  ngOnInit(): void {
    this.login=this.fd.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
    this.commserv.getUser().subscribe((data:any)=>{
      this.users=data;
     })
  }
 

  loginsubmit(data:any){
    if(data.name){
      this.users.forEach((item:any)=>{
        if(item.name===data.name && item.email===data.email){
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['main']);
        }
        else{
          console.log("user is invalid");
        }
      });
    }
  }
  registeron(){
    this.router.navigate(['register']);
  }
  
}

