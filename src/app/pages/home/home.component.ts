import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Swiper JS
import { Swiper, SwiperOptions } from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
 sliderOpts:any;
 quotationForm:FormGroup;
 dialog:Boolean = false;
 tempInfoModal:any;
 Object = Object;
  constructor(private formBuilder:FormBuilder) {
    this.createForm()
   }

  ngOnInit() {
    this.sliderOpts = [
      {
        banner:'https://picsum.photos/1080/700?random=2'
      },
      {
        banner:'https://picsum.photos/1080/700?random=3'
      },
      {
        banner:'https://picsum.photos/1080/700?random=4'
      },
    ]
    setTimeout(() => {
      this.showSwipper()
    }, 500);

  }
  createForm(){
    this.quotationForm = this.formBuilder.group({
      carBrand: ['', Validators.required],
      carModel: ['', Validators.required],
      carYear: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+[a-zA-Z0-9-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telephone: ['',[Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10)]],
    })
  }
   // HANDLE ERRORS MESSAGES
   get errorControl() {
    return this.quotationForm.controls
  }
  get carBrandInvalid() {
    return this.quotationForm.get('carBrand').invalid && this.quotationForm.get('carBrand').touched
  }
  get carModelInvalid() {
    return this.quotationForm.get('carModel').invalid && this.quotationForm.get('carModel').touched
  }
  get carYearInvalid() {
    return this.quotationForm.get('carYear').invalid && this.quotationForm.get('carYear').touched
  }
  get emailInvalid() {
    return this.quotationForm.get('email').touched && this.quotationForm.get('email').invalid
  }
  get phoneInvalid() {
    return this.quotationForm.get('telephone').invalid && this.quotationForm.get('telephone').touched
  }

  handleQuotation(form){
    if (this.quotationForm.invalid) {
      return Object.values(this.quotationForm.controls).map(control => {
        control.markAsTouched();
      });
    }
    this.dialog = true;
    this.tempInfoModal = form
   console.log("form is ",form)
   console.log("form is ",this.tempInfoModal)
  }
  showSwipper(){

    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:false,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    const swiper = new Swiper('.swiper-container', swiperParams);

  }

}
