import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {IContact} from "../../models/contact.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {}

  token:string | null = null
  selectedContact: IContact | undefined

  ngOnInit(): void {
    //comprobar si existe el token en el session storage
    this.token = sessionStorage.getItem('token')

    //Leemos del estado del historial de navegacion
    if(history.state.data) {
      console.log(history.state.data)
      this.selectedContact = history.state.data
    }
  }

  navToContacts(): void {
    let navigationExtras:NavigationExtras = {
      queryParams: {
        gender: 'all'
      }
    }
    this.router.navigate(['contacts'], navigationExtras)
  }

}
