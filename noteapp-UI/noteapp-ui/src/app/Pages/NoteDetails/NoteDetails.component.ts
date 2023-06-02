import { NoteServiceService } from './../../shared/NoteService.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-NoteDetails',
  templateUrl: './NoteDetails.component.html',
  styleUrls: ['./NoteDetails.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  noteId :number;
  new: boolean;
  constructor(private notesService: NoteServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //find out if we are creating new note or editing an excisting one
    this.route.params.subscribe((params: Params) =>{
      
    this.note = new Note();
      if(params.id){
         this.notesService.getNote(params.id).subscribe(
          note =>{
             this.noteId = note.id;
             this.note = note;
          }
        );
      this.new = false;
      }
      else{
        this.new = true;
      }
    })

  }

  onSubmit(form: NgForm){

    if(this.new){
      this.notesService.add(form.value);

    }
    else{
      this.notesService.update(form.value,this.note.id).subscribe();
    }
    this.router.navigateByUrl('/');
  
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
