import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../assets/resources/contact';
import {CONTACTS}from '../../assets/resources/contacts';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']

  
})
export class ContactCardComponent implements OnInit {

  @Input()
  contact?: Contact;
  constructor() { 
    
  }


  ngOnInit(): void {
    
  }

  @Output()
  hoveredContact: EventEmitter<any> = new EventEmitter<any>();
  showDetails(contact:any){
    this.hoveredContact.emit(contact);
  }

  hideDetails(contact:any){
  this.hoveredContact.emit(null);
  }
  
}
