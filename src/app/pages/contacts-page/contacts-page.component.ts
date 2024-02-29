import {Component, OnInit} from '@angular/core';
import {IContact} from "../../models/contact.interface";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  genderFilter: string = 'all'
  listContacts: IContact[] = []

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {
  }

  ngOnInit(): void {
    //Obtenemos los Query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams',params.gender)
      if(params.gender){
        this.genderFilter = params.gender
      }
      //Solicitamos
      this.contactService.getContacts(this.genderFilter)
        .then((list) => this.listContacts = list)
        .catch((error) => console.error(`Ha ocurrido un error al obtenre los contactos: ${error}`))
        .finally(() => console.info('Peticion de contactos terminada'))
    })


  }

  returnToHome(contacto: IContact){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this.router.navigate(['home'], navigationExtras)
  }

}
