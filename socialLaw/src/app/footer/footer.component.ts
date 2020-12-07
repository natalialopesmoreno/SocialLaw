import { Component, OnInit } from '@angular/core';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import{ faFacebook} from '@fortawesome/free-brands-svg-icons'
import{ faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{ faInstagram} from '@fortawesome/free-brands-svg-icons'
import{ faBlackTie} from '@fortawesome/free-brands-svg-icons'
import{ faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faLinkedin= faLinkedin
  faInstagram = faInstagram
  faBlackTie = faBlackTie
  faBalanceScale = faBalanceScale
  faWhatsapp = faWhatsapp

  constructor() { }

  ngOnInit(): void {
  }

}
