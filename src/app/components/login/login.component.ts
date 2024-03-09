import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean=false
  errorMsg:string=""
  constructor(private _AuthService:AuthService,private _router:Router){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  });

  handleLoginForm(){
    this.isLoading=true
   if (this.loginForm.valid)

   this._AuthService.signIn(this.loginForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      if (res.message=="success") {
        this.isLoading=false
        localStorage.setItem('_token',res.token)
        this._AuthService.getToken()
        this._router.navigate(["/home"])
      }
    },
    error:(err)=>{
      console.log(err);
      this.isLoading=false
      this.errorMsg=err.error.message

    }

   })
  }

  forgetPasswordForm : FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email])
  })


  showForgetForm:boolean=true
  showVerificationForm:boolean=false
  showResetPassword:boolean=false

  errorMsgForgetForm:string = ""
  errorMsgVerifcationForm:string = ""

  handleForgetPasswordFrom(){
    if(this.forgetPasswordForm.valid){
      this._AuthService.forgetpassword(this.forgetPasswordForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.showForgetForm= false
          this.showVerificationForm=true
        },
        error:(err)=>{
          console.log(err);
          this.errorMsgForgetForm= err.error.message
        }
      })
      }
    }


  verificationCodeFrom : FormGroup = new FormGroup({
    resetCode : new FormControl("",[Validators.required])
  })

  handleVerificationCodeFrom(){
    if (this.verificationCodeFrom.valid) {
      this._AuthService.verifyCode(this.verificationCodeFrom.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.showVerificationForm=false
          this.showResetPassword=true
        },
        error:(err)=>{
          console.log(err);
          this.errorMsgVerifcationForm=err.error.message

        }
      })
    }
  }

  resetPasswordFrom : FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    newPassword : new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)])
  })

  handleResetPasswordFrom(){
    if (this.resetPasswordFrom.valid) {
      this._AuthService.resetPassword(this.resetPasswordFrom.value).subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('_token',res.token)
          this._router.navigate(['/login'])
        },
        error:(err)=>{
          console.log(err);

        }
      })
    }
  }
}
