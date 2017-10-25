import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


  
  @ViewChild(Slides) slides: Slides;
  
    goToSlide() {
      this.slides.slideTo(2, 500);
    }

}
