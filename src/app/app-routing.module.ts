import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'productos',
    component: ProductoComponent,
    canActivate: [GuardGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
