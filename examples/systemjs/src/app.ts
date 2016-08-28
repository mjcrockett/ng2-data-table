import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {DataTableDirectives} from 'angular2-datatable/datatable';


@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})
export class App  {

    private data;

    selectedEntities: any[];

    constructor(private http:Http) {
        http.get("/src/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 5000);
            });
    }

    public setSelectedEntities($event) {
      this.selectedEntities = $event;
    }

    private toInt(num:string) {
        return +num;
    }

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }

}
