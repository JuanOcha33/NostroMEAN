import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoService} from '../../services/photo.service'

import {Photo} from '../../intercafes/Photo';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {

  id: string;
  photo: Photo;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
      .subscribe(
        res=>{
          this.photo = res;
        },
        err=>console.log(err)
      )
    })
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/photos']);
      },
      err=>console.log(err)

    )

  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
    this.photoService.updatePhoto(this.id, title.value, description.value)
    .subscribe(
      res=> {
        this.router.navigate(['/photos'])
      },
      err=>console.log(err)
    )
    return false;
  }

}
