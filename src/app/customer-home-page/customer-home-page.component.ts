import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-customer-home-page",
  templateUrl: "./customer-home-page.component.html",
  styleUrls: ["./customer-home-page.component.css"]
})
export class CustomerHomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loginSubmit(param1) {
    if (param1.valid) {
      console.log(param1.value);
    }
  }
}
