import { Component, inject } from '@angular/core';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc } from 'firebase/firestore';
import { MatDialogRef } from '@angular/material/dialog';


interface Item {


};

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],

})

export class DialogAddUserComponent {

  picker!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  user = new User();
  birthDate!: Date;
  template: any;
  loading = false;

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);
  
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    const itemCollection = collection(this.firestore, 'customer');
    this.item$ = collectionData(itemCollection);
  }


  saveUser() {
    this.user.birthdate = this.birthDate.getTime();
    console.log('Current user', this.user);
    this.loading = true;
    const userRef = collection(this.firestore, 'users'); //oder wie die Sammlung heissen soll

    const addUserRef = addDoc(userRef, this.user.toJson()).then((result: any) => {
      this.loading = false;
      this.closeDialog();
    });

    console.log('User added with ID: ', addUserRef);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
