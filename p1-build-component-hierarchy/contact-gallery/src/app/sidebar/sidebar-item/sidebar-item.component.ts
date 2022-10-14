import { Component, Input, OnInit } from '@angular/core';
import {Contact} from '../../../assets/resources/contact'
@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
  @Input()
  public parentData:Contact={};
  
  constructor() { }

  ngOnInit(): void {
  }

}
