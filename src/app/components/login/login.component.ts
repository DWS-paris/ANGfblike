import { Component, OnInit } from '@angular/core';

// Importer la class du Router
import { Router } from '@angular/router';

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
    private connexionService: ConnexionService,
    // Déclarer une class pour utiliser le router
    private router: Router
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

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  cookieLogin = this.getCookie("cookieLogin")
  cookiePassword = this.getCookie("cookiePassword")

  ngOnInit() {

    if(this.cookieLogin && this.cookiePassword){
      this.router.navigateByUrl('/connected');

    } else{
      console.log('il n\'y à pas de cookies')
    }
    
  }

}
