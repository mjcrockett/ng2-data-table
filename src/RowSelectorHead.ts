import {Component, Input} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfRowSelectorHead",
    template: `
        <input type="checkbox" id="{{optionalId}}" [checked]="isChecked" (change)="onChange($event)" />
        <label attr.for="{{optionalId}}"></label>
        `
})
export class RowSelectorHead {
    @Input("mfTable") private dataTable: DataTable;
    @Input("optionalId") optionalId: string;

    private isChecked: boolean = false;

    public constructor() {
    }

    private onChange($event) {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.dataTable.selectAllRows();
        }
        else {
            this.dataTable.deselectAllRows();
        }
    }
}
