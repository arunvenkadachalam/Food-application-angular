import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
list:any=[];
  constructor(private commonser:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonser.getUser().subscribe((data:any)=>{
      this.list=data;
    })
  }
  database()
  {
    this.router.navigate(['home'])
  }
  logout()
  {
localStorage.clear();
this.router.navigate(['login']);
  }
 
  

}
