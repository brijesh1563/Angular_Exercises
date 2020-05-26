import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/http-interceptors';
import { HttpErrorService } from './core/services/http-error.service';
import { AlertPopupComponent } from './shared/popups/alert-popup/alert-popup.component';
import { MasterHeaderComponent } from './core/components/master-header/master-header.component';
import { MasterFooterComponent } from './core/components/master-footer/master-footer.component';
import { AgGridModule } from 'ag-grid-angular';
// import { MatTabsModule} from '@angular/material';
// import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageFormatterComponent } from './image-formatter-component/image-formatter-component.component';
// import { MaterialModule } from '@angular/material'
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    MasterHeaderComponent,
    MasterFooterComponent,
    ImageFormatterComponent,
    // MaterialModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    // MatTabsModule,
    BrowserAnimationsModule,
    // MaterialModule,
  // NgbModule,
    NgxPaginationModule,
    AgGridModule.withComponents([ImageFormatterComponent]),
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    HttpErrorService
  ],
  entryComponents: [AlertPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }