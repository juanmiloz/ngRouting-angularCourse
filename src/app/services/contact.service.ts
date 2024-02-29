import { Injectable } from '@angular/core';
import {IContact} from "../models/contact.interface";
import {contacts} from "../mocks/contacts.mock";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: IContact[] = contacts

  constructor() { }

  getContacts(gender ?: string): Promise<IContact[]>{
    if(gender === 'men' || gender === 'women'){
      let filterList:IContact[] = this.contactList.filter(contact => contact.gender === gender);
      return Promise.resolve(filterList)
    } else if (gender === 'all'){
      return Promise.resolve(this.contactList)
    } else{
      return Promise.reject('Filtro no valido');
    }
  }
}
