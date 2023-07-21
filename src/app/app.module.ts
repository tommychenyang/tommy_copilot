import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MetadataService } from './metadata.service';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { FormsModule } from '@angular/forms';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(public metadataService: MetadataService) {
    this.metadataService.loadMetaData();
  }
 }
