import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';
import { Contacto } from '../model/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form:FormGroup;

  constructor(private service:ContactoService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      nombre:['', Validators.required],
      apellido: '',
      email:['', [Validators.required, Validators.email]],
      telefono:['', Validators.required],
      comentario:['', Validators.required]
    })
  }

  enviar(contacto:Contacto){
    this.service.save(contacto).subscribe(()=>{
      console.log("Enviando los datos");
    })
  }
}
