import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMetaData } from '../consts/types';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent {

  @Input() metaData: IMetaData[] = [];
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();


  _isValid: boolean = false;
  _formData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  validateForm(){
    let isValid = true;
    let formFields = this.metaData.map((item: IMetaData) => [...item.components] );
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
    let isValid = true;
    let formFields = this.metaData.map((item: IMetaData) => [...item.components] );
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
    

    isValid && this.submit.emit(this._formData);
  }

}
