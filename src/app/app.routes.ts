import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { NoticiasComponent } from './shared/noticias/noticias.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent },
    { path: 'Nosotros', component: NosotrosComponent },
    { path: 'Noticias', component: NoticiasComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}