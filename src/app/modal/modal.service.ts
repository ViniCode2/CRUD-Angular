import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modal } from './modal';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly API = 'http://localhost:3000/tabela';

  constructor(private http: HttpClient) { }

list(){
  return this.http.get<Modal[]>(this.API)
  .pipe(
    tap(console.log)
  );
  
}

create (modal:any) {
  return this.http.post(this.API, modal).pipe(take(1));
}

}
