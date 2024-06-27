import {
    Component, EventEmitter,
    Injector, Input,
    OnInit,
    Output
} from '@angular/core';
import { CustomerDetailsService } from '../customer/customer-details.service';

@Component({
    selector: 'client-grid',
    templateUrl: './client-grid-component.component.html',
    styleUrls: ['./client-grid-component.component.css'],
})
export class ClientGridComponentComponent implements OnInit {

    constructor(private customerDetailsService: CustomerDetailsService) { }
    
    fileName: any;
    filteredData: any[] = [];

    // Table DATA VALUE and COLUMN HEADER.
    @Input() gridDataTableValue: any[] = [];
    @Input() gridColumnValue: any[] = [];

    // Boolean Variables to disable and enable the BUTTONS.

    @Input() gridCreateButton: boolean = false;
    @Input() selectedRowData: any;
    @Input() scrollHeight: any;
    @Input() dataKey: any;
    @Input() isScroll: boolean = false;
    @Input() numberOfRows: number = 10;
    @Input() isCreateDisable: boolean = false;
    @Input() gridEditButton: boolean = false;
    @Input() gridViewButton: boolean = false;
    @Input() gridDeleteButton: boolean = false;
    @Input() isDeleteDisable: boolean = true;
    @Input() isEditDisable: boolean = true;
    @Input() isViewDisable: boolean = true;
    @Input() showRadioButton: boolean = true;
    @Input() showDisableRadioButton: boolean = false;
    @Input() showCheckBoxButton: boolean = false;
    @Input() clearButton: boolean = false;
    //pagination variables and EVENTS.
    @Input() isPagination: boolean = true;
    @Input() scrollWidth: string | undefined;
    @Input() createButtonName: any;
    @Input() editButtonName: any;
    @Input() viewButtonName: any;
    @Input() deleteButtonName: any;
    @Input() clearButtonName:any;
    @Input() inputGlobalSearchString: any;
    // Button EVENTS
    @Output() createEvent = new EventEmitter<any>();
    @Output() editEvent = new EventEmitter<any>();
    @Output() deleteEvent = new EventEmitter<any>();
    @Output() viewEvent = new EventEmitter<any>();
    @Output() selectRowDataChange = new EventEmitter<{ event: any, selectedRowData: any }>();
    @Output() ngModelChange = new EventEmitter<any>(); // search event.
    @Output() clearSearchEvent = new EventEmitter<any>();
    ngOnInit(): void {

    }


    create() {
        this.createEvent.emit();
    }

    Edit(selectedRowData: any) {
        this.editEvent.emit(selectedRowData);
    }

    delete(selectedRowData: any) {
        this.deleteEvent.emit(selectedRowData);
    }
    view(selectedRowData: any) {
        this.viewEvent.emit(selectedRowData);
    }
    selectData(event: any, selectedRowData: any) {
        this.selectRowDataChange.emit({ event, selectedRowData });
    }
    globalSearch(searchValue: string) {
        this.ngModelChange.emit(searchValue);

    }

    clearSearch() {
        this.inputGlobalSearchString = '';
        this.clearSearchEvent.emit();
    }

    selectMultiCheck: any[] = [];
    selectCheckBox(event: any, value: any, selectedIndex: any) {
        if (event.target.checked == true) {
            this.selectMultiCheck.push(value);
        } else {
            var index = this.selectMultiCheck.findIndex(x => x.isin === value.isin);
            this.selectMultiCheck.splice(index, 1);
        }
    }

}
