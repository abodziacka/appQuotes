import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  clickMessage = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickMessage = 'You\'re password have been send. Please check your email.';
  }

}