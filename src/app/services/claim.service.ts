import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  users$: Observable<any[]>;
  claimDetails!: any;
  // private dbPath = '/policyHolders'
  constructor(private firestore: Firestore) {
    this.claimDetails = collection(this.firestore, 'policyHolders');
    // this.firestore.coll
  }

  getUsers() {
    const collect = collection(this.firestore, 'users');
    this.users$ = collectionData(collect);
    this.users$.subscribe(data => {
      console.log('item data: ', data);
    });
  }

  addClaimDetails(claimData: any) {

    return this.claimDetails.add({ ...claimData });
  }

  // getAllUsers(): Observable<any[]> {
  // const collection = collection(this.firestore, 'items');
  // this.item$ = collectionData(collection);
  // const quotes = this.firestore.collection<any>('quotes').snapshotChanges().pipe(
  //   map(actions => {
  //     return actions.map(
  //       c => ({
  //         postId: c.payload.doc.id,
  //         ...c.payload.doc.data()
  //       }));
  //   }));
  // return quotes;
  // }
}
