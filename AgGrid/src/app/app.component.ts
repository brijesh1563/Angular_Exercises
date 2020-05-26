import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from './core/services/test.service';
import { HttpErrorService } from './core/services/http-error.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './core/services/auth.service';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { ImageFormatterComponent } from "./image-formatter-component/image-formatter-component.component";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

//  let test=require('./mock/mock.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pager = {};
  pageOfItems = [];
  items=[];
  data:Array<any>
  totalRecords:number;
  
  page:number=1;
  

  @ViewChild('myGrid') myGrid: AgGridAngular;

  public gridOptions: Partial<GridOptions>;
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  userSubscriber: Subscription;
  public startpage : number =1;
  rowData: any;

  constructor(
    public authService: AuthService,
    public test: TestService,
    public http:HttpClient,
    public route: ActivatedRoute,
  ) {
     

    this.columnDefs = [
      { headerName: ' Id', field: 'id', sortable: true },
      { headerName: ' Name', field: 'name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Email', field: 'email', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Contact', field: 'phone', sortable: true },
      { headerName: 'Address', field: 'address', sortable: true },
      { headerName: 'Image', field: 'image', sortable: true,cellRendererFramework: ImageFormatterComponent  }
    ];
    this.data=new Array<any>();
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 10,
      paginationPageSize: 10,
      rowModelType: 'infinite',
    }
  }

  onGridReady(params) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var datasource = {
      getRows: (params: IGetRowsParams) => {
        //  TODO: Call a service that fetches list of users
        console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        console.log("dhairya",params);
        this.test.fetch(this.startpage,this.gridOptions.paginationPageSize)
          .subscribe(data => { 
            // console.log(data);
            params.successCallback(data.message,100) 
            console.log(data.message)
            console.log(this.startpage);
            
            this.startpage = this.startpage +1;
          });
        }
    }

    this.gridApi.setDatasource(datasource);
  }

  onPaginationChanged() {

  }

  ngOnInit() {
  this.test.getData().subscribe((data)=>
  {
    this.data=data.results
    this.totalRecords=data.length
  console.log('dha',this.totalRecords)

  })


    this.route.queryParams.subscribe(x => this.test.loadPage(x.page || 1));
    this.http.get('http://localhost:5000/user').subscribe(data=>
      {
        console.log(data)
        console.log('fu')
        for(let key in data)
        {
          if(data.hasOwnProperty(key))
          {
            this.items.push(data[key])
          }
        }
       })
   }
   onPrint(){
     window.print();
   }
  
}
