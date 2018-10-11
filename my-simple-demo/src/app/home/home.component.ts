import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'home.component';
  subTitle: string = '홈 컴포넌트';
  message: string = 'Hello';

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
  }

  update() {
    alert(this.message);
    // dataShare 객체에게 데이터를 전달하여 보존합니다.
    this.dataShareService.setData(this.message);
  }
}
