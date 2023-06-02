import { NoteDetailsComponent } from './Pages/NoteDetails/NoteDetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './Pages/NotesList/NotesList.component';
import { MainLayoutComponent } from './Pages/MainLayout/MainLayout.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'new', component: NoteDetailsComponent },
      { path: ':id', component: NoteDetailsComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
