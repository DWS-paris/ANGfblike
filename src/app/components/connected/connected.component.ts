import { Component, OnInit } from '@angular/core';

// Importer la class du Router
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent implements OnInit {

  constructor(
    // Déclarer une class pour utiliser le router
    private router: Router
  ) { }

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
      console.log('il y à des cookies')

    } else{
      this.router.navigateByUrl('/login');
    }
    
  }

}
