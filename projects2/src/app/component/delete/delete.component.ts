import { CrudService } from './../../service/crud.service';
import { Component } from '@angular/core';
import { CreatUser } from '../../models/creat-user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  user: CreatUser = {
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

  deleteUserById() {
    this.http.delete(this.myId).subscribe({
      next: (data) => {
        console.log(data);
        this.isDeleted = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
