import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Http} from "@angular/http";
import {DataTableDirectives} from 'ng2-data-table/datatable';

@Component({
    selector: 'app',
    templateUrl: 'src/app.component.html',
})
export class AppComponent  {

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
