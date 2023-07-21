import { Injectable } from '@angular/core';
import { IMetaData } from './consts/types';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  _metaData: IMetaData[] = [];
  constructor() { 
    

  }

  //load metadata from local storage
  async loadMetaData(){
    let data = await import('../../metadata.json');
    console.log(data);
    this._metaData = data.modal
  }

  
}
