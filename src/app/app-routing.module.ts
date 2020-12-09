import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserListComponent } from './user-list/user-list.component';




const routes: Routes = [  
{ path: 'users',  component: UserListComponent, canActivate:[AuthGaurdService] },
//{ path: 'auth', component: AuthComponent },
{ path: '', component: LoginComponent },
{ path: 'not-found', component: FourOhFourComponent },
{ path: 'new-user', component: NewUserComponent, canActivate:[AuthGaurdService]},
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent},
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
