import { Component, OnInit } from '@angular/core';



export interface HCI {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-readynode',
  templateUrl: './readynode.component.html',
  styleUrls: ['./readynode.component.scss']
})
export class ReadynodeComponent implements OnInit {

  selectedValue: string;

  hcitypes: HCI[] = [
    {value: 'Hybrid', viewValue: 'Hybrid'},
    {value: 'All Flash', viewValue: 'All Flash'},
    {value: 'Advanced', viewValue: 'Advanced (All Flash)'}
  ];



  constructor() { }

  ngOnInit() { }
       

}
