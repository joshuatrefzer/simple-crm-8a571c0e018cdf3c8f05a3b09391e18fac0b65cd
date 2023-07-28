import { Injectable } from '@angular/core';
import { User } from 'src/models/user.class';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

export interface UserInterface extends User {

}

@Injectable({
  providedIn: 'root'
})


export class CrudServiceService {
  users!: AngularFireList<any>;
  user!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  // Create User
  AddStudent(user: UserInterface) {
    this.users.push({
      firstName: user.firstname,
      firstname: user.firstname,
      lastname: user.lastname,
      birthdate: user.birthdate,
      street: user.street,
      zipcode: user.zipcode,
      city: user.city,
      email: user.email
    });
  }
  
  // Fetch Single Student Object
  GetStudent(id: string) {
    this.user = this.db.object('students-list/' + id);
    return this.user;
  }

  // Fetch Students List
  GetStudentsList() {
    this.users = this.db.list('students-list');
    return this.users;
  }

  // Update Student Object
  UpdateStudent(user: UserInterface) {
    this.user.update({
      firstName: user.firstname,
      firstname: user.firstname,
      lastname: user.lastname,
      birthdate: user.birthdate,
      street: user.street,
      zipcode: user.zipcode,
      city: user.city,
      email: user.email
    });
  }
}