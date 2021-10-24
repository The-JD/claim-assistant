import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.page.html',
  styleUrls: ['./claim-form.page.scss'],
})
export class ClaimFormPage implements OnInit {

  form: any;

  constructor() { }

  ngOnInit() {
    this.form = {
      customerName: '',
      customerAge: '',
      customerAddress:'',
      customerCity:'',
      customerPincode:'',
      customerEmail:'',
      customerPhone:'',
      policyNumber:'',
      sumAssured:'',
      company:'',
      policyType:'',
      policyPlanName:'',
    }
  }

  logForm(){
    alert('form entered');
  }
}
