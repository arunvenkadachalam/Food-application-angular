import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:any=FormControl;
id:number=Math.floor(Math.random() *100);
  constructor(private fd:FormBuilder,private router:Router,private commServ:CommonService) { }

  ngOnInit(): void {
    this.register=this.fd.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
  }
  onregister(data:any)
  {
  console.log(data);
  let dataToPass={
    name:data.name,
    email:data.email,
    id:this.id
  }
  this.commServ.adduser(dataToPass).subscribe((data:any)=>{
    console.log(data);
    this.router.navigate(['login']);
    
  })

  }
  loginon(){
    this.router.navigate(['login']);
  }
}
