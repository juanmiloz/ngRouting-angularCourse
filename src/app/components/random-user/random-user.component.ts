import {Component, Input, OnInit} from '@angular/core';
import {RandomUserService} from "../../services/random-user.service";
import {IRandonContact, Results} from "../../models/randomUser";

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact: IRandonContact | undefined

  constructor() { }

  ngOnInit(): void {}

}
