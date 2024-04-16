import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-get-all-with-angular-material',
  templateUrl: './get-all-with-angular-material.component.html',
  styleUrl: './get-all-with-angular-material.component.scss',
})
export class GetAllWithAngularMaterialComponent {
  users!: User[];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
