import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ArchiveComponent } from './archive/archive.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestoreComponent } from './restore/restore.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'show/:id', component:ShowComponent},
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'delete/:id', component:DeleteComponent},
  {path:'restore/:id', component:RestoreComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
