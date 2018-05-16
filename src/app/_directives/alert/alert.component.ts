import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription  } from 'rxjs';
import {AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy  {
  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertService) {
    this.subscription = alertService.getMessage().subscribe(message => this.message = message);
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
