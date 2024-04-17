import { Component } from '@angular/core';
import { CreatUser } from '../../models/creat-user';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent {
  myId!: number;
  user: CreatUser = {
    name: '',
    email: '',
    password: '',
    login: '',
    role: '',
  };

  setValue: CreatUser = {
    name: '',
    email: '',
    password: '',
    login: '',
    role: '',
  };

  constructor(private http: CrudService) {
    this.getById();
  }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setUser() {
    this.http.update(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
