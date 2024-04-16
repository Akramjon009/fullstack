import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { CreatUser } from '../../models/creat-user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  resultData!: CreatUser;

  setValue: CreatUser = {
    name: 'Akramjon',
    email: 'akramjon47@calachnikov.ru',
    password: 'sadsad',
    login: 'Admin11',
    role: 'Student',
  };

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createUser(data: CreatUser) {
    this.crudService.Create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      },
    });
  }

  setUser() {
    this.createUser(this.setValue);
  }
}
