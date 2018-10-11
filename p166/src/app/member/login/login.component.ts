import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../share/service/data-share.service';

@Component({
  selector: 'app-login',
  template: `
    <p>{{message}}</p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  message: string = null;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.message = this.dataShareService.getMessage();
  }

}
