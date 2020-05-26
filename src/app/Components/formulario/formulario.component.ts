import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public datosUsuario: FormGroup;

  public departamentos;
  public municipios;
  public array = [];
  public status;
  public statusText;

  public datos;

  constructor(private formBuilder: FormBuilder, private _aplicationService: AppService) {

    this.datosUsuario = this.formBuilder.group({
      txtNombre : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),Validators.pattern('[a-z A-z ñ]*')]],
      txtCedula : ['', [Validators.required, Validators.pattern('[0-9]*')]],
      txtCorreo : ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      txtTelefono : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[0-9]*')]],
      departamento : [''],
      municipio : [''],
      txtAsunto : ['', [Validators.required, Validators.minLength(5)]],
      txtMensaje : ['', [Validators.required,  Validators.minLength(5)]]
    })
   }


  ngOnInit() {
    this.getDepartamentos();
  }

  prueba(){

    let nombre = this.datosUsuario.value.txtNombre;
    let cedula = this.datosUsuario.value.txtCedula;
    let correo = this.datosUsuario.value.txtCorreo;
    let telefono = this.datosUsuario.value.txtTelefono;
    let departamento = this.datosUsuario.value.departamento;
    let municipio = this.datosUsuario.value.municipio;
    let asunto = this.datosUsuario.value.txtAsunto;
    let mensaje = this.datosUsuario.value.txtMensaje;

    this.datos = {nombre, cedula,correo,telefono,departamento,municipio,asunto,mensaje};

    console.log(this.datos);

    this._aplicationService.postFormulario(this.datos).subscribe((response) =>{
      console.log(response);
      let respuesta = response[0];
console.log(respuesta.send);
      if(respuesta.send === "si")
      {
        this.status = 'success';
        this.statusText = 'Datos de usuario guardados con exito';
        this.datosUsuario.reset();

      }
    },(err) => {
      console.log(err);
      this.status = 'error';
      this.statusText = 'Error al guardar los datos de usuario, por favor revisa tu conexión o intentalo más tarde.';
      //document.getElementById('modal').click();
      return false;
    });

  }

  getDepartamentos(){
    this._aplicationService.getDepartamentos().subscribe( (response) =>{
      this.departamentos = response;
    },(err) =>{

    });
  }

  getMunicipios(id){
    this._aplicationService.getMunicipios(id).subscribe( (response) => {
      this.municipios = response;
    }, (err) => {

    });
  }

  departSelec(ev){
    this.getMunicipios(this.datosUsuario.value.departamento);
  }

}
