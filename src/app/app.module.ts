import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposComponent } from './grupos/grupos.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { TerritoriosComponent } from './territorios/territorios.component';
import { MapaComponent } from './mapa/mapa.component';
import { VidaYministerioComponent } from './vida-yministerio/vida-yministerio.component';
import { ReunionPublicaComponent } from './reunion-publica/reunion-publica.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { PublicadoresComponent } from './publicadores/publicadores.component';
import { ResponsabilidadesComponent } from './responsabilidades/responsabilidades.component';


const routes: Routes = [
  { path: 'grupos', component: GruposComponent },
  {path: '', component: IndexComponent},
  {path: 'territorios', component: TerritoriosComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'vida-y-ministerio', component:VidaYministerioComponent},
  {path: 'reunion-publica', component:ReunionPublicaComponent},
  {path:'limpieza',component:LimpiezaComponent},
  {path:'publicadores', component:PublicadoresComponent},
  {path:'responsabilidades', component:ResponsabilidadesComponent},
  {path: '**', redirectTo:''}
];
@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    MenuComponent,
    IndexComponent,
    TerritoriosComponent,
    MapaComponent,
    VidaYministerioComponent,
    ReunionPublicaComponent,
    LimpiezaComponent,
    PublicadoresComponent,
    ResponsabilidadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot(routes),
   HttpClientModule 
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
