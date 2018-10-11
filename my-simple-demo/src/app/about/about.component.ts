import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  message: string = null;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.message = this.dataShareService.getData();
  }

}
