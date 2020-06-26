import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../persona.service';
import { Usuario } from '../model/usuario';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  personaLog:Persona;

  constructor(private service:PersonaService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  consultar(usuario:Usuario){
    this.service.findByEmailAndPassword(usuario).subscribe((persona)=>{
     this.personaLog=persona;
      console.log("Enviando los datos");
    })
  }

}
