import { Component, inject } from '@angular/core';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc } from 'firebase/firestore';


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

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

 

  constructor() {
    const itemCollection = collection(this.firestore, 'customer');
    this.item$ = collectionData(itemCollection);
  }


  saveUser() {
    console.log('user is', this.user);
    this.user.birthdate = this.birthDate.getTime();

    collection(this.firestore, 'customer')
    
    
    // this.firestore.collection('users').add(this.user).then((result:any) => {
    //   console.log('Adding User', result);
      
    // })
  }
}
