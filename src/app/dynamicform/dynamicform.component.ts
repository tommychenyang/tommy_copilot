import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMetaData } from '../consts/types';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent {

  @Input() set metaData(list: IMetaData[]){
    this._metaData = list.sort((a: IMetaData, b: IMetaData) => (a.order || 0- (b.order || 0)));
    this._metaData.map((item: IMetaData) => [...item.components] ).forEach((item: any) => {
      item.sort((a: any, b: any) => a.order - b.order);
    }
    )
    
  }
  @Output() submit = new EventEmitter<any>();


  _metaData: IMetaData[] = [];
  _isValid: boolean = false;
  _formData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  validateForm(){
    let isValid = true;
    let formFields = this._metaData.map((item: IMetaData) => [...item.components] );
    formFields.forEach((item: any) => {
      item.forEach((field: any) => {
        if(field?.rule?.required && !this._formData[field.key]){
          isValid = false;
        }

        if(field?.rule?.maxLength && this._formData[field.key] && this._formData[field.key]?.length > field?.rule?.maxLength){
          isValid = false;
        }
      })
    })
    this._isValid = isValid;
  }
  submitForm(){
    this.submit.emit(this._formData);
  }

}
