import { Routes } from '@angular/router'; 
import { LoginComponent } from './views/login/login.component'; 
import { Exo1Component } from './comp/exo1/exo1.component';
import { Exo2Component } from './comp/exo2/exo2.component';
import { Exo3Component } from './comp/exo3/exo3.component';
import { Exo4Component } from './comp/exo4/exo4.component';
import { Exo5Component } from './comp/exo5/exo5.component';

export const ROUTES: Routes = [
    { path: "" , component: LoginComponent },
    { path: 'exo1', component: Exo1Component },
    { path: 'exo2', component: Exo2Component },
    { path: 'exo3', component: Exo3Component },
    { path: 'exo4', component: Exo4Component },
    { path: 'exo5', component: Exo5Component },
]
