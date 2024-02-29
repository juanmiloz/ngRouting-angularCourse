import {Component, OnInit} from '@angular/core';
import {IRandonContact, Results} from "../../models/randomUser";
import {RandomUserService} from "../../services/random-user.service";

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  contact: IRandonContact | undefined

  constructor(private randomUserService: RandomUserService) {
  }

  ngOnInit(): void {
    this.getNewContact()
  }

  getNewContact(): void {
    /*this.randomUserService.getRandomContact().subscribe(
      (response: Results) => {
        this.contact = response.results[0]; // se lo pasaremos al RandomContact
      },
      (error) => console.log(`${error}`)
    )*/

    this.randomUserService.getRandomContact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0]; // se lo pasaremos al RandomContact
      },
      error: (error) => console.log(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`),
    })
  }

}
