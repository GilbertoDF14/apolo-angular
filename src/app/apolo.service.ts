import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/apolo/public/";

@Injectable({
  providedIn: 'root'
})
export class ApoloService {

  private cuenta={user:'',nombre:'',apellidos:'',rol:'',token:''};
  private curso={id:0,nombre:'',profesor:'',descripcion:''};
  private micurso={id:0,cursoid:0,nombre:'',profesor:'',descripcion:''};

  setCurso(id:any,nombre:string,profesor:string,descripcion:string){
    this.curso.id=id;
    let idtem=this.curso.id.toString();
    this.curso.nombre=nombre;
    this.curso.profesor=profesor;
    this.curso.descripcion=descripcion;

    localStorage.setItem('id',idtem);
    localStorage.setItem('nombreC',nombre);
    localStorage.setItem('profesor',profesor);
    localStorage.setItem('descripcion',descripcion);
  }

  setmiCurso(id:any,cursoid:any,nombre:string,profesor:string,descripcion:string){
    this.micurso.id=id;
    this.micurso.cursoid=cursoid;
    let idmc=this.micurso.id.toString();
    let idc=this.micurso.cursoid.toString();
    this.micurso.nombre=nombre;
    this.micurso.profesor=profesor;
    this.micurso.descripcion=descripcion;

    localStorage.setItem('mcid',idmc);
    localStorage.setItem('mcidc',idc);
    localStorage.setItem('micurso',nombre);
    localStorage.setItem('mcprofesor',profesor);
    localStorage.setItem('mcdescripcion',descripcion);
  }

  getMiCurso(){
    let idmc = localStorage.getItem('mcid');
    let idc = localStorage.getItem('mcidc');
    this.micurso.id= parseInt(idmc);
    this.micurso.cursoid= parseInt(idc);
    this.micurso.nombre = localStorage.getItem('micurso');
    this.micurso.profesor = localStorage.getItem('mcprofesor');
    this.micurso.descripcion = localStorage.getItem('mcdescripcion');
    return this.micurso;
  }

  getCurso(){
    let idtem = localStorage.getItem('id');
    this.curso.id= parseInt(idtem);
    this.curso.nombre = localStorage.getItem('nombreC');
    this.curso.profesor = localStorage.getItem('profesor');
    this.curso.descripcion = localStorage.getItem('descripcion');
    return this.curso;
  }

  setCuenta(user:string,nombre:string,apellidos:string,rol:string,token:string){
    this.cuenta.user=user;
    this.cuenta.nombre=nombre;
    this.cuenta.apellidos=apellidos;
    this.cuenta.rol=rol;
    this.cuenta.token=token;
    //permite almacenar datos en el navegador
    localStorage.setItem('user',user);
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('apellidos',apellidos);
    localStorage.setItem('rol',rol);
    localStorage.setItem('token',token);
  }

  getCuenta(){
    this.cuenta.user = localStorage.getItem('user');
    this.cuenta.nombre = localStorage.getItem('nombre');
    this.cuenta.apellidos = localStorage.getItem('apellidos');
    this.cuenta.rol = localStorage.getItem('rol');
    this.cuenta.token = localStorage.getItem('token');
    return this.cuenta;
  }

  constructor(private http: HttpClient) { }

  login(user:string, pass:string){
    return this.http.get(URL + "login/" + user + "/" + pass)
  }

  cursos(){
    let headers=new HttpHeaders;
    headers=headers.append('Authorization',this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.get(URL + "curso",{headers:headers});
  }

  users(){
    let headers=new HttpHeaders;
    headers=headers.append('Authorization',this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.get(URL + "usuario",{headers:headers});
  }

  editCurso(id,profesor,nombre,desc){
    let headers = new HttpHeaders;
    let param = new HttpParams;
    param = param.append('profesor', profesor);
    param = param.append('nombre', nombre);
    param = param.append('descripcion', desc);
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.put(URL + "curso/" + id, {headers:headers, params: param});
  }

  cursosPr(){
    let headers=new HttpHeaders;
    headers=headers.append('Authorization',this.cuenta.token);
    console.log(this.cuenta.token);
    const us=this.cuenta.user;
    return this.http.get(URL + "cursos/"+us,{headers:headers});
  }

  idcurso(){
    let headers=new HttpHeaders;
    headers=headers.append('Authorization',this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.get(URL + "idcurso",{headers:headers});
  }

  miscursos(){
    let headers=new HttpHeaders;
    headers=headers.append('Authorization',this.cuenta.token);
    const us=this.cuenta.user;
    return this.http.get(URL + "mycourses/"+us,{headers:headers});
  }

  addCurso(profesor:string,nombre:string,descripcion:string){
    let headers=new HttpHeaders;
    let form = new FormData;
    headers=headers.append('Authorization',this.cuenta.token);
    form.append('profesor',profesor);
    form.append('nombre',nombre);
    form.append('descripcion',descripcion);
    return this.http.post(URL + "curso",form,{headers:headers});
  }

  addUser(user:string,password:string,nombre:string,apellidos:string,rol:string){
    let headers=new HttpHeaders;
    let form = new FormData;
    headers=headers.append('Authorization',this.cuenta.token);
    form.append('user',user);
    form.append('pass',password);
    form.append('nombre',nombre);
    form.append('apellidos',apellidos);
    form.append('rol',rol);
    return this.http.post(URL + "usuario",form,{headers:headers});
  }

  addMiCurso(curso,alumno:string){
    let headers=new HttpHeaders;
    let form = new FormData;
    headers=headers.append('Authorization',this.cuenta.token);
    form.append('curso',curso);
    form.append('alumno',alumno);
    return this.http.post(URL + "micurso",form,{headers:headers});
  }

  delCurso(id:number){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.delete(URL + "curso/"+id, {headers:headers});
  }

  delMiCurso(id:number){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.delete(URL + "mycourse/" + id, {headers:headers});
  }
 
}
