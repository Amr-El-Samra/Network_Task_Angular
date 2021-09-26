import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { RestoreComponent } from './restore/restore.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    ArchiveComponent,
    NotFoundComponent,
    DeleteComponent,
    RestoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
