import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../assets/resources/contact';
import {CONTACTS}from '../../assets/resources/contacts';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  @Input()
  contacts: Contact[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.contacts);
  }

  public item:Contact ={};

  //let sortContact=contacts
}
