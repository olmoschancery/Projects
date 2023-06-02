import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  notes: Note[] = new Array<Note>();
  constructor(private httpClient: HttpClient) {}

  getNote(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`http://localhost:8080/api/item/${id}`);
  }

  getAll() {
    return this.httpClient.get<Note[]>(`http://localhost:8080/api/item`);
  }
  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    this.httpClient
      .post(`http://localhost:8080/api/item`, note, httpOptions)
      .subscribe((newTodo) => {
        let newLength = this.notes.push(note);
        let index = newLength - 1;
      });
    //this method will add a note to the notes array and return the id of the note
    //where the id = index
  }

  update(note: Note, id: number): Observable<Note> {
    return this.httpClient.patch<Note>(
      `http://localhost:8080/api/item/${id}`,
      note,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:8080/api/item/${id}`,
      httpOptions
    );
  }
}
