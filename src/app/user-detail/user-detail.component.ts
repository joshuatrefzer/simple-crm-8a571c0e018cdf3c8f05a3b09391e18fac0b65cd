import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  userId:any= '';
  USER!: Observable<any[]>;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('got it', this.userId);
      this.getUser();
    })
  }


/// Crud Service implementieren
  getUser() {
    const collectionInstance = collection(this.firestore, 'users');

  }



}
