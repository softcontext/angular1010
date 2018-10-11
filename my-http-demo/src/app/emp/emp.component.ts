import { Component, OnInit } from '@angular/core';
import { EmpHttpService } from '../service/emp-http.service';
import { Emp } from '../domain/emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emps: Array<Emp> = undefined;
  errorMessage = undefined;
  emp: Emp = {
    id: undefined,
    firstName: undefined,
    lastName: undefined
  };

  constructor(private empHttpService: EmpHttpService) { }

  ngOnInit() {}

  findAll() {
    // let self = this;
    //
    // this.empHttpService.findAll()
    //   .then(function(data) { // always executed
    //     self.emps = data;
    //   }).catch(function(error) { // handle error
    //     console.log(error);
    //   });

    // this.empHttpService.findAll()
    //   .then(function(data) { // always executed
    //     this.emps = data;
    //   }.bind(this)).catch(function(error) { // handle error
    //     console.log(error);
    //   });

    this.errorMessage = undefined;

    this.empHttpService.findAll()
      .then(data => { // always executed
        this.emps = data;
      }).catch(error => { // handle error
        console.log(error);
        this.errorMessage = error;
      });
  }

  findOne(id) {
    this.empHttpService.findOne(id)
      .then(data => { // always executed
        this.emp = data;
      }).catch(error => { // handle error
        console.log(error);
        this.errorMessage = error;
      });
  }

  addOne(firstName, lastName) {
    const emp = {
      id: 0,
      firstName,
      lastName
    };

    this.empHttpService.addOne(emp)
      .then(data => { // always executed
        this.emp = data;
      }).catch(error => { // handle error
        console.log(error);
        this.errorMessage = error;
      });
  }

  deleteOne(id){
    this.empHttpService.deleteOne(id)
      .then(ignore => { // always executed
        const index = this.emps.findIndex(emp => emp.id == id);
        this.emps.splice(index, 1);
      }).catch(error => { // handle error
        console.log(error);
        this.errorMessage = error;
      });
  }

  updateOne() {
    this.empHttpService.updateOne(this.emp)
      .then(data => { // always executed
        // this.emp = data;
      }).catch(error => { // handle error
        console.log(error);
        this.errorMessage = error;
      });
  }
}
