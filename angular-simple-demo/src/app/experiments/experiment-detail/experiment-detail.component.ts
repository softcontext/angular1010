import { Component, OnInit, Input } from '@angular/core';
import { Experiment } from '../../model/experiment';

@Component({
  selector: 'app-experiment-detail',
  templateUrl: './experiment-detail.component.html',
  styleUrls: ['./experiment-detail.component.css']
})
export class ExperimentDetailComponent implements OnInit {
  // 부모 컴포넌트가 건네주는 데이터를 받습니다.
  @Input() experiment: Experiment;

  doExperiment(): void {
    this.experiment.completed += 1;
  };

  ngOnInit() {}
}
