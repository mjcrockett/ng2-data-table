import {Component, Input} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfRowSelectorHead",
    template: `
        <input type="checkbox" class="chkbx" id="{{checkboxId}}" [checked]="isChecked" (change)="onChange($event)" />
        <label attr.for="{{checkboxId}}" class="chkbx-lbl"></label>
        `
})
export class RowSelectorHead {
    @Input("mfTable") private dataTable: DataTable;
    @Input("checkboxId") checkboxId: string;

    isChecked: boolean = false;

    public constructor() {
    }

    onChange($event) {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.dataTable.selectAllRows();
        }
        else {
            this.dataTable.deselectAllRows();
        }
    }
}
