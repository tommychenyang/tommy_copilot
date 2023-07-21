import { Component } from '@angular/core';
import { MetadataService } from './metadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tommy_copilot';

  /**
   *
   */
  constructor(public metadataService: MetadataService) {
    
    
  }

  onSubmit(data: any){
    console.log(data);
    alert(JSON.stringify(data))
  }
}
