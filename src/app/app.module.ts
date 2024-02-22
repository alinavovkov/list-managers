import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProhibitedWordsComponent } from './components/works/prohibited-words/prohibited-words.component';
import { TasksComponent } from './components/works/tasks/tasks.component';
import { UsersComponent } from './components/works/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ChildListComponent } from './components/works/tasks/child-list/child-list.component';
import { WorksComponent } from './components/works/works.component';
import { WorkHeaderComponent } from './components/works/work-header/work-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProhibitedWordsComponent,
    TasksComponent,
    UsersComponent,
    HomeComponent,
    ChildListComponent,
    WorksComponent,
    WorkHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
