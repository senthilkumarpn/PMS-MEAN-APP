import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../app/Home/home/home.component';
import {LoginComponent} from '../app/login/login/login.component';
import {RegisterComponent} from '../app/Register/register/register.component';
import {AuthGuard} from '../app/_guards/auth.guard';
const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'**',redirectTo:''},

];

export const routing = RouterModule.forRoot(appRoutes);