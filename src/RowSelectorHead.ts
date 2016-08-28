import {Component, Input} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfRowSelectorHead",
    template: `
        <input type="checkbox" [checked]="isChecked" (change)="onChange($event)" />
        `
})
export class RowSelectorHead {
    @Input("mfTable") private dataTable: DataTable;

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
