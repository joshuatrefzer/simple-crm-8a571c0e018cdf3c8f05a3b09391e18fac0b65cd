import { Component, OnInit, inject } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  allUsers: any[] = [];

  constructor(public dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    const userRef = collection(this.firestore, 'users');
    getDocs(userRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.allUsers.push({ id: doc.id, ...doc.data() });
        console.log("users", this.allUsers);
      });
    });
  }

 

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
