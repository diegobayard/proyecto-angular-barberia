import { Component, OnInit } from '@angular/core';
import { ContenidoUsuarioService } from '../contenido-usuario.service';
import { Contacto } from '../model/contacto';
import { Turno } from '../model/turno';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  turnos:Turno[];
  contactos:Contacto[];
  currentUser:any;
  private privilegios:String[];
  esAdmin = false;

  constructor(private userService: ContenidoUsuarioService, private token: TokenStorageService) { }

  ngOnInit() {
    /*
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
    this.currentUser = this.token.getUser();
    if(this.currentUser!=null){
      this.privilegios=this.currentUser.roles;
      this.esAdmin = this.privilegios.includes('ROLE_ADMIN');
    }

    this.userService.getAll().subscribe((turnos:Turno[])=>{
      this.turnos=turnos;
    })

    this.userService.getMensajes().subscribe((contactos:Contacto[])=>{
      this.contactos=contactos;
    })
  }
  abrirTabla(evt:any, servNombres:string) {
    var i:number;
    var tablinks:any;
    var tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(servNombres).style.display = "block";
    evt.currentTarget.className += " active";
    }

}
