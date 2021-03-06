import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private claimService: ClaimService) { }

  ngOnInit() {
    // this.claimService.getUsers();

  }

  addClaim() {
    let claimData = {
      address: "1A",
      admissionDate: "test",
      city: "test",
      claimReason: "test",
      dischargeDate: "",
      dob: "",
      email: "",
      hospitalAddress: "",
      hospitalCity: "",
      hospitalName: "",
      hospitalPincode: "",
      mobile: "",
      name: "test",
      pincode: "test",
      policyCompany: "",
      policyNumber: "1",
      policyPlan: "",
      policyType: "",
      sumAssured: "",
    };
    this.claimService.addClaimDetails(claimData);
  }

  addPolicy() {
    let data = {
      company: "LIC",
      customerid: "1234",
      planName: "Jeevan Anand",
      policyNumber: "89987",
      policyType: "A",
      sumAssured: "2000000"
    }
    this.claimService.addPolicy(data);
  }

  getPolicies() {
    this.claimService.getPolicies();
  }

}
