import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './Pages/NotesList/NotesList.component';
import { NoteCardComponent } from './Pages/NoteCard/NoteCard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedLibModule } from './Shared-libs.module';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './Pages/MainLayout/MainLayout.component';
import { NoteDetailsComponent } from './Pages/NoteDetails/NoteDetails.component';
import { FormsModule } from '@angular/forms';
// import { LoginModule } from './Pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NoteCardComponent,
    NotesListComponent,
    NoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    SharedLibModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
