import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [ 
{
  path:'',
  children:[
    {
      path: 'login',
       component: LoginPageComponent,
      data: {
        title: 'Login Page'
      }
    },
  ]
} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
