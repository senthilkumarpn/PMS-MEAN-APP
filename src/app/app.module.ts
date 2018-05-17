import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient,HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login/login.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { HomeComponent } from './Home/home/home.component';
import { RegisterComponent } from './Register/register/register.component';
import {AuthenticationService} from './_services/authentication.service';
import {AuthGuard} from './_guards/auth.guard';
import {AlertService} from './_services/alert.service';
import {UserService} from './_services/user.service';
import {JwtInterceptor, JwtInterceptorProvider} from './_helpers/jwt-interceptor';
import {ErrorInterceptor, ErrorInterceptorProvider} from './_helpers/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
