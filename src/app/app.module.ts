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

const rutas: Route[] = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'cursos', component: TemasComponent},
  {path:'users', component: UsuariosComponent},
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
    TemasComponent
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
