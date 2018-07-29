import { Component, ViewEncapsulation, OnInit } from '@angular/core';



export interface ReadWrite {
  value: string;
  viewValue: string;
}

export interface FTTvalue {
  value: string;
  viewValue: string;
}

export interface HybridDriveType {
  value: string;
  viewValue: string;
}

export interface CacheDriveSize {
  value: string;
  viewValue: string;
}

export interface CacheDriveIOPS {
  value: string;
  viewValue: string;
}

export interface BlockSize {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hybridhost',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hybridhost.component.html',
  styleUrls: ['./hybridhost.component.scss']
})
export class HybridhostComponent implements OnInit {
  
  /// for guage 
  gaugeType : string = "arch";
  gaugeSize : number = 300;
  gaugeValue: number = 0;
  guageMax: number = 0;
  gaugeLabel: string = "Read IOPS";
  gaugeAppendText: string = "";
  gaugeTailShape: string = "round";
  gaugeForeGround: string = "rgb(241, 196, 15, 1)";
  gaugeBackGround: string = "rgb(108, 52, 131, 1)";

  


  hostMin = 2;
  hostMax = 64;
  vmMin: number = 6;
  vmMax: number = 12800;
  vmCount: number = 6;
  activeDataSetMin = 1;
  activeDataSetMax = 15;
  stripeMin = 1;
  stripeMax = 12;
  diskGroupMin = 1;
  diskGroupMax = 5;
  hostCount = 2;
  dgCount = 1;
  diskCount = 1;
  iopsperVM: number = 10;
  iopsVmMin: number = 10;
  disksMin = 1;
  disksMax = 7;
  capacityIopsMin = 1;
  cacheIopsMin = 1;

/// Custom values
selectedHDD: string;



/// Read Write Ratio

  readWrite: ReadWrite[] = [
    {value: '100', viewValue: '0 Read / 100 Write'},
    {value: '90', viewValue: '10 Read / 90 Write'},
    {value: '80', viewValue: '20 Read / 80 Write'},
    {value: '70', viewValue: '30 Read / 70 Write'},
    {value: '60', viewValue: '40 Read / 60 Write'},
    {value: '50', viewValue: '50 Read /50 Write'},
    {value: '40', viewValue: '60 Read / 40 Write'},
    {value: '30', viewValue: '70 Read / 30 Write'},
    {value: '20', viewValue: '80 Read / 20 Write'},
    {value: '10', viewValue: '90 Read / 10 Write'},
    {value: '0', viewValue: '100 Read / 0 Write'}
  ];


/// Failure to tolerate value  

  fttValue: FTTvalue[] = [
    {value: '0', viewValue: 'Zero Protection'},
    {value: '1', viewValue: '1 Host Failure'},
    {value: '2', viewValue: '2 Host Failure'},
    {value: '3', viewValue: '3 Host Failure'}
  ];


/// Block Size

  blockSize: BlockSize[] = [
    {value: '4', viewValue: '4 KB'},
    {value: '8', viewValue: '8 KB'},
    {value: '16', viewValue: '16 KB'},
    {value: '32', viewValue: '32 KB'},
    {value: '64', viewValue: '64 KB'},
    {value: '128', viewValue: '128 KB'},
    {value: '256', viewValue: '256 KB'}
  ];


  hybriddrivetype: HybridDriveType[] = [
    {value: '80', viewValue: '7.2K RPM - 80 IOPS'},
    {value: '120', viewValue: '10K RPM - 120 IOPS'},
    {value: '170', viewValue: '15K RPM - 170 IOPS'}
  ];

  cachedrivesize: CacheDriveSize[] = [
    { value: '2000', viewValue: '2000 GB' }
  ];


  cachedriveiops: CacheDriveIOPS[] = [
    { value: '10000', viewValue: 'Class B - 10000 IOPS' },
    { value: '20000', viewValue: 'Class C - 20000 IOPS' },
    { value: '30000', viewValue: 'Class D - 30000 IOPS' },
    { value: '100000', viewValue: 'Class E - 100000 IOPS' },
    { value: '150000', viewValue: 'Class F - 150000 IOPS' }

  ];

  //// Gauage
    
  readIOPS() {

    this.gaugeValue = this.vmCount * this.iopsperVM;
    this.guageMax = this.gaugeValue * 1.25;
    console.log ( this.gaugeValue, this.guageMax );

  }
   

  constructor() { }
/*
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
*/
  ngOnInit() { }


  ngOnDestroy() { }



}
