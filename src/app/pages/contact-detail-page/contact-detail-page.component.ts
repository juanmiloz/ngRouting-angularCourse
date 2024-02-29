import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContact} from "../../models/contact.interface";

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined
  contact: IContact | undefined
  currentFilter: string = "all"

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // vamos a leer los parametros de la ruta
    this.route.params.subscribe(
      (params: any) => {
        if(params.id) this.id = params.id
      }
    )

    //vamos a leer el state del contacto
    if(history.state.data){
      this.contact = history.state.data
    }

    if(history.state.filter){
      this.currentFilter = history.state.filter
    }

  }


}
