import { Component } from '@angular/core';
import { CitiesStatesService } from './services/cities-states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';
  lista: any[] = [];

  constructor (
    private service: CitiesStatesService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

    getAll(){
      this.service.getCities().subscribe((response)=>{
        let obj: any = response;
        this.lista = obj.estados;

      });
  }

}
