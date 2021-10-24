import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  users$: Observable<any[]>;
  claimDetails!: any;
  constructor(private firestore: Firestore) {
    this.claimDetails = collection(this.firestore, 'policyHolders');
  }

  getUsers() {
    const collect = collection(this.firestore, 'users');
    this.users$ = collectionData(collect);
    this.users$.subscribe(data => {
      console.log('item data: ', data);
    });
  }

  addClaimDetails(claimData: any) {
    let claimDetail = doc(this.firestore, 'policyHolders', 'policyHolders1');
    setDoc(claimDetail, claimData, { merge: true })
      .then(() => {
        alert('success');

      })
      .catch((error) => {
        console.log('add error: ', error);
      })
  }

  addPolicy(policyData: any) {
    const index = this.getIndex();
    console.log('index : ', index);
    let policyDetail = doc(this.firestore, 'policies', 'policy' + index);
    setDoc(policyDetail, policyData, { merge: true })
      .then(() => {
        alert('success');
      })
      .catch((error) => {
        console.log('add error: ', error);
      })
  }

  getIndex() {
    const collect = collection(this.firestore, 'policies');
    collectionData(collect).subscribe(data => {
      console.log('policies data: ', data);
      return data.length;
    });
  }

  getPolicies() {
    const collect = collection(this.firestore, 'policies');
    collectionData(collect).subscribe(data => {
      console.log('policies data: ', data);
    });
  }

}
