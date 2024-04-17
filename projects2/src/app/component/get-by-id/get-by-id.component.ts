import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { CreatUser } from '../../models/creat-user';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss',
})
export class GetByIdComponent  implements OnInit {
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
}
