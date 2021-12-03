import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AltuserComponent } from './altuser/altuser.component';
import { TemasComponent } from './temas/temas.component';
import { EditartemaComponent } from './editartema/editartema.component';
import { DeltemaComponent } from './deltema/deltema.component';
import { DeluserComponent } from './deluser/deluser.component';
import { EditaruserComponent } from './editaruser/editaruser.component';
import { TemascursoComponent } from './temascurso/temascurso.component';
import { VertemaComponent } from './vertema/vertema.component';
import { EliminatemacComponent } from './eliminatemac/eliminatemac.component';
import { ModificatemacComponent } from './modificatemac/modificatemac.component';
import { MiperfilComponent } from './miperfil/miperfil.component';

const rutas: Route[] = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'cursos', component: TemasComponent},
  {path:'users', component: UsuariosComponent},
  {path:'editcursos', component: EditartemaComponent},
  {path:'delcursos', component: DeltemaComponent},
  {path:'deluser', component: DeluserComponent},
  {path:'edituser', component: EditaruserComponent},
  {path:'temascurso', component: TemascursoComponent},
  {path:'vertema', component: VertemaComponent},
  {path:'deltema', component: EliminatemacComponent},
  {path:'modtema', component: ModificatemacComponent},
  {path:'myprofile', component: MiperfilComponent},
  {path:'altuser', component: AltuserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    MenuComponent,
    UsuariosComponent,
    AltuserComponent,
    TemasComponent,
    EditartemaComponent,
    DeltemaComponent,
    DeluserComponent,
    EditaruserComponent,
    TemascursoComponent,
    VertemaComponent,
    EliminatemacComponent,
    ModificatemacComponent,
    MiperfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
