import { Component, OnInit } from '@angular/core';
import { Sample1 } from './services/sample1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularDI';
  constructor(){}
  ngOnInit(): void {
    // this.srv.name = "APP_Component";
    // this.srv.display();
  }
}
