import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { Modal } from './modal';
import { ModalService } from './modal.service';
import { catchError } from 'rxjs/operators'
// import { BsModalService } from '../../';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modals!: Modal[];

  modals$! : Observable<Modal[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: ModalService
    // private modalService: BsModalService
    ) { }

  

  ngOnInit() {
    this.modals$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  // onDelete(modal) {

  // }

}
