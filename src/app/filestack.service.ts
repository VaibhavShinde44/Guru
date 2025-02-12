import { Injectable } from '@angular/core';
import { init, Client, PickerOptions } from 'filestack-js';

@Injectable({
  providedIn: 'root'
})
export class FilestackService {
  client: Client;
  constructor() {
    this.client = init('AcDVWBOfqTjaJnx5odYoyz');
  }

  openPicker(options: PickerOptions = {}) {
    this.client.picker(options).open();
  }

  deleteFile(handle: string) {
    return this.client.remove(handle, {
      policy: 'eyJjYWxsIjpbInJlYWQiLCJ3cml0ZSIsInJlbW92ZSJdLCJleHBpcnkiOjE3NjcyMDc2MDB9',
      signature: 'acd5324ad2b59b3cd57cf750171bf574647c024e2f4419518a6a61f53bd89f4d'
    });
  }
}
