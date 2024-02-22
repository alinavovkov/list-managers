import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProhibitedWordsComponent } from './components/works/prohibited-words/prohibited-words.component';
import { TasksComponent } from './components/works/tasks/tasks.component';
import { UsersComponent } from './components/works/users/users.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'works/words', component: ProhibitedWordsComponent },
  { path: 'works/tasks', component: TasksComponent },
  { path: 'works/users', component: UsersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
