import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import {PhotoService} from '../../services/photo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  titles = [];

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(){
    this.photoService.getTitle("HomeCard")
    .subscribe(
      res=>{
        this.titles = res;
      },
      err=>console.log(err)
    )

    
}

  selectedSeccion(title: String){
    this.router.navigate(['/', title])
  }




}
