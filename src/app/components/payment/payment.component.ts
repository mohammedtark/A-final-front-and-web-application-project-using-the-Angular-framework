import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  id:string=''
  constructor(private _CartService:CartService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.get('id'));
      this.id = res.get('id')
    })
  }
  shippindForm:FormGroup=new FormGroup({
    details:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
  })
  handleShippingForm(){
    if (this.shippindForm.valid) {
      this._CartService.checkout( this.id,this.shippindForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          window.location.href=res.session.url
        },
        error:(err)=>{
          console.log(err);

        }
      })
    }
  }
}
