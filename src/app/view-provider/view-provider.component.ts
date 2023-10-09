import { OnInit, ViewContainerRef,ViewChild, Component, TemplateRef, AfterViewInit } from '@angular/core';
import { Sample1 } from '../services/sample1.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.css']
})
export class ViewProviderComponent implements OnInit, AfterViewInit {

  @ViewChild('container',{read: ViewContainerRef}) conainer!: ViewContainerRef;
  @ViewChild('defaultTemplate') template!: TemplateRef<any>;
  constructor(private srv: Sample1) { }

  ngOnInit(): void {
    this.srv.name = "View Provider";
    this.srv.display();
  }
  ngAfterViewInit(): void {
    this.conainer.clear();
    this.conainer.createEmbeddedView(this.template);
    // var ref = this.conainer.createComponent(DynamicComponent);
    // // ref.instance.name = "shubham"; old way of passing input
    // ref.setInput('name',"shubham");
    
  }

  createComp():void {
    var ref = this.conainer.createComponent(DynamicComponent);
    // ref.instance.name = "shubham"; old way of passing input
    ref.setInput('name',"shubham");
  }


}

