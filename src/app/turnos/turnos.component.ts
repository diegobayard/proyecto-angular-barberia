import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Turno } from '../model/turno';
import { TurnoService } from '../turno.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  currentUser: any;
  valido = false;
  form:FormGroup;
  botonApretado = false;
  nombreUsuario:'';
  emailUsuario:'';

  constructor(private token: TokenStorageService, private service:TurnoService, private fb:FormBuilder) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    if(this.currentUser != null){
      this.nombreUsuario = this.currentUser.username;
      this.emailUsuario = this.currentUser.email;
    }
    this.form=this.fb.group({
      username:this.nombreUsuario,
      email: this.emailUsuario,
      barbero:['', Validators.required],
      dia:['', Validators.required],
      mes:['', Validators.required],
      hora:['', Validators.required]
    })
    this.botonApretado = false;
  }

  enviar(turno:Turno){
    this.botonApretado=true;
    this.valido=this.validar(turno);
    if(this.valido){
      this.service.save(turno).subscribe(()=>{
        console.log("Enviando los datos");
      })
    }
  }

  validar(turno:Turno):boolean{
    if(turno.mes == 4 || turno.mes == 6 || turno.mes == 9 || turno.mes == 11){
      if(turno.dia > 30 || turno.dia < 1){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      if(turno.mes == 2){
        if(turno.dia > 28 || turno.dia < 1){
          return false;
        }
        else{
          return true;
        }
      }
      else{
        if(turno.dia < 1 || turno.dia > 31){
          return false;
        }
        else{
          return true;
        }
      }
    }
  }

}
