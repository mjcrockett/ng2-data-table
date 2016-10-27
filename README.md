# Table component with sorting and pagination for Angular2

## Demo

## Installation

```
npm i -S ng2-data-table
```

## Usage example

app.module.ts
```typescript
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";

import {DataTableModule} from "ng2-data-table/lib/DataTableModule";

@NgModule({
    imports: [BrowserModule, HttpModule, DataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

app.component.ts
```typescript
 import {Component} from '@angular/core';

 @Component({
     selector: 'app',
     templateUrl: 'app.component.html'
 })
 export class AppComponent {
     private data: any[] = ...
     selectedEntities: any[];
 }
```

app.component.html
```html
<table class="table table-striped" [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="5"  (mfSelectedEntities)="setSelectedEntities($event)">
    <thead>
    <tr>
        <th>
            <mfRowSelectorHead [mfTable]="mf"></mfRowSelectorHead>
        </th>
        <th style="width: 20%">
            <mfDefaultSorter by="name">Name</mfDefaultSorter>
        </th>
        <th style="width: 50%">
            <mfDefaultSorter by="email">Email</mfDefaultSorter>
        </th>
        <th style="width: 10%">
            <mfDefaultSorter by="age">Age</mfDefaultSorter>
        </th>
        <th style="width: 20%">
            <mfDefaultSorter by="city">City</mfDefaultSorter>
        </th>
    </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of mf.data; let ndx = index">
        <td>
          <mfRowSelector [selectedEntities]="mf.selectedEntities" [entity]="item"
          [checkboxId] = "ndx" (selectEntity)="mf.addRemoveSelectedEntity($event)"></mfRowSelector>
        </td>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td class="text-right">{{item.age}}</td>
        <td>{{item.city | uppercase}}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="4">
            <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
        </td>
    </tr>
    </tfoot>
</table>
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display on table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number should be displayed on init (default: 1)

### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))

### `mfBootstrapPaginator` component
Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

 - selector: `mfBootstrapPaginator`
 - inputs
   - `rowsOnPageSet: number` - specify values for buttons to change number of displayed rows

### `mfRowSelector` component
Displays a checkbox for the row. When checked, the entity in the row is added to the mfDataTable's mfSelectedEntities. The mfSelectedEntities then emits the array of entities currently checked in the mfDataTable.

 - selector: `mfRowSelector`
 - inputs:
   - `entity: any` - the data entity in the current row
   - `selectedEntities: any[]` - the array of data entities currently selected in the datatable
   - `checkboxId: string` - optionally specify the id used by the checkbox's "id" attribute and the checkbox label's "for" attribute
