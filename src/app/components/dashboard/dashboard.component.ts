import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userList:any=[];
  constructor(private commonServi:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonServi.getUser().subscribe((data:any)=>{
      this.userList=data;
    })
  }
  logout()
  {
localStorage.clear();
this.router.navigate(['login']);
  }
  home()
  {
    this.router.navigate(['main']);
  }

}
