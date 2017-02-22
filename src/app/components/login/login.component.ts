import { Component, OnInit } from '@angular/core';

// 1# Importer la class du service
import { ConnexionService } from '../../services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  // 2# Déclarer le service dans le tableau des providers
  providers: [ConnexionService]

})
export class LoginComponent implements OnInit {

  constructor(
    // 3# Créer une variable pour uiliser le service
    private connexionService: ConnexionService
  ) { }

  // Créer un objet vide à utiliser dans ngModel du formulaire
  userInfos = {
    login: '',
    password: ''
  }

  // Créer une fonction pour appeler userLogin() dans le service
  formSubmit(infos){
    this.connexionService.userLogin(infos);
  }

  ngOnInit() {
  }

}
