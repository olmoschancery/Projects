import { NoteServiceService } from './../../shared/NoteService.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NotesList',
  templateUrl: './NotesList.component.html',
  styleUrls: ['./NotesList.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();


  constructor(private notesService:NoteServiceService, private router: Router) { }

  ngOnInit() {
   //retrieve all notes from nbotesServioce 
  this.notesService.getAll().subscribe(notes => {
    this.notes = notes });

  }

  deleteNote(id:number){
    this.notesService.delete(id).subscribe(
      ignored =>{
        window.location.reload();
      });
    
  }

}
