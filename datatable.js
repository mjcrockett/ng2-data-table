var dataTable_directive = require('./lib/DataTable');
var defaultSorter_directive = require('./lib/DefaultSorter');
var paginator_component = require('./lib/Paginator');
var bootstrapPaginator_component = require('./lib/BootstrapPaginator');
var rowSelector_component = require('./lib/RowSelector');
var rowSelectorHead_component = require('./lib/RowSelectorHead');

exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.RowSelector = rowSelector_component.RowSelector;
exports.RowSelectorHead = rowSelectorHead_component.RowSelectorHead;

exports.DataTableDirectives = [
    dataTable_directive.DataTable,
    defaultSorter_directive.DefaultSorter,
    paginator_component.Paginator,
    bootstrapPaginator_component.BootstrapPaginator,
    rowSelector_component.RowSelector,
    rowSelectorHead_component.RowSelectorHead
];
