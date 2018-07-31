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

export interface SelectHostCount {
  value: string;
  viewValue: string;
}

export interface SelectDGCount {
  value: string;
  viewValue: string;
}

export interface SelectCapDiskCount {
  value: string;
  viewValue: string;
}

export interface SelectStripeCount {
  value: string;
  viewValue: string;
}

export interface SelectWorkingSetCount {
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
  readValue: number = 0;
  writeValue: number = 0;
  totalIOPS: number = 0;
  guageMax: number = 0;
  readgaugeLabel: string = "Read IOPS";
  writegaugeLabel: string = "Write IOPS";
  totalgaugeLabel: string = "Total IOPS";
  totalHostgaugeLabel: string = "Consumed IOPS";
  totalHostcacheLabel: string = " cache in GB";
  gaugeAppendText: string = "";
  gaugeTailShape: string = "round";
  gaugeForeGround: string = "rgb(244, 208, 63, 1)";
  gaugeBackGround: string = "rgb(108, 52, 131, 1)";


  
/// Host Varibles
  hostTotalIOPS: number;
  hostMin: number = 2;
  hostMax: number = 64;
  hostCount: number = 8;
  diskGroupMin: number = 1;
  diskGroupMax: number = 5;
  dgCount: number = 1;
  diskCount: number = 1;
  disksMin: number = 1;
  disksMax: number = 7;
  capacityIopsMin: number = 1;
  capacitydiskCount: number = 1;
  capcityDiskIOPSvalue: number = 80;
  cacheIopsMin: number = 1;
  cacheIOPSvalue: number = 30000;
  totalCacheCapacity: number = 0;
  CacheCapacity:number = 200;
  cacheBalance:number = 0;
  workingSet: number = 0;
  usableCapacity: number;


  /// VM variables
  vmMin: number = 6;
  vmMax: number = 12800;
  vmSize: number = 100;
  vmCount: number = 6;
  activeDataSetMin:number = 1;
  activeDataSetMax:number = 15;
  stripeMin: number = 1;
  stripeMax: number = 12;
  iopsperVM: number = 10;
  iopsVmMin: number = 10;
  activeDataSet:number = 2;

  blockSizevalue: number = 4;
  rwratiovalue: number = 70;
  stripes: number = 1;
  fttvalue: number = 1;
  penaltyIOPS:number = 1;

/// Custom values
selectedHDD: string;
iopsWarnMessage: string ;
cacheWarnMessage: string;
cachewarning: boolean = false;
iopswarning: boolean = false;


/// Host Count Select
selecthostcount: SelectHostCount [] = [
  {value:'2', viewValue: ' 2 Nodes / Hosts '},
  {value:'3', viewValue: ' 3 Nodes / Hosts '},
  {value:'4', viewValue: ' 4 Nodes / Hosts '},
  {value:'5', viewValue: ' 5 Nodes / Hosts '},
  {value:'6', viewValue: ' 6 Nodes / Hosts '},
  {value:'7', viewValue: ' 7 Nodes / Hosts '},
  {value:'8', viewValue: ' 8 Nodes / Hosts '},
  {value:'9', viewValue: ' 9 Nodes / Hosts '},
  {value:'10', viewValue: ' 10 Nodes / Hosts '},
  {value:'11', viewValue: ' 11 Nodes / Hosts '},
  {value:'12', viewValue: ' 12 Nodes / Hosts '},
  {value:'13', viewValue: ' 13 Nodes / Hosts '},
  {value:'14', viewValue: ' 14 Nodes / Hosts '},
  {value:'15', viewValue: ' 15 Nodes / Hosts '},
  {value:'16', viewValue: ' 16 Nodes / Hosts '},
  {value:'17', viewValue: ' 17 Nodes / Hosts '},
  {value:'18', viewValue: ' 18 Nodes / Hosts '},
  {value:'19', viewValue: ' 19 Nodes / Hosts '},
  {value:'20', viewValue: ' 20 Nodes / Hosts '},
  {value:'21', viewValue: ' 21 Nodes / Hosts '},
  {value:'22', viewValue: ' 22 Nodes / Hosts '},
  {value:'23', viewValue: ' 23 Nodes / Hosts '},
  {value:'24', viewValue: ' 24 Nodes / Hosts '},
  {value:'25', viewValue: ' 25 Nodes / Hosts '},
  {value:'26', viewValue: ' 26 Nodes / Hosts '},
  {value:'27', viewValue: ' 27 Nodes / Hosts '},
  {value:'28', viewValue: ' 28 Nodes / Hosts '},
  {value:'29', viewValue: ' 29 Nodes / Hosts '},
  {value:'30', viewValue: ' 30 Nodes / Hosts '},
  {value:'31', viewValue: ' 31 Nodes / Hosts '},
  {value:'32', viewValue: ' 32 Nodes / Hosts '},
  {value:'33', viewValue: ' 33 Nodes / Hosts '},
  {value:'34', viewValue: ' 34 Nodes / Hosts '},
  {value:'35', viewValue: ' 35 Nodes / Hosts '},
  {value:'36', viewValue: ' 36 Nodes / Hosts '},
  {value:'37', viewValue: ' 37 Nodes / Hosts '},
  {value:'38', viewValue: ' 38 Nodes / Hosts '},
  {value:'39', viewValue: ' 39 Nodes / Hosts '},
  {value:'40', viewValue: ' 40 Nodes / Hosts '},
  {value:'41', viewValue: ' 41 Nodes / Hosts '},
  {value:'42', viewValue: ' 42 Nodes / Hosts '},
  {value:'43', viewValue: ' 43 Nodes / Hosts '},
  {value:'44', viewValue: ' 44 Nodes / Hosts '},
  {value:'45', viewValue: ' 45 Nodes / Hosts '},
  {value:'46', viewValue: ' 46 Nodes / Hosts '},
  {value:'47', viewValue: ' 47 Nodes / Hosts '},
  {value:'48', viewValue: ' 48 Nodes / Hosts '},
  {value:'49', viewValue: ' 49 Nodes / Hosts '},
  {value:'50', viewValue: ' 50 Nodes / Hosts '},
  {value:'51', viewValue: ' 51 Nodes / Hosts '},
  {value:'52', viewValue: ' 52 Nodes / Hosts '},
  {value:'53', viewValue: ' 53 Nodes / Hosts '},
  {value:'54', viewValue: ' 54 Nodes / Hosts '},
  {value:'55', viewValue: ' 55 Nodes / Hosts '},
  {value:'56', viewValue: ' 56 Nodes / Hosts '},
  {value:'57', viewValue: ' 57 Nodes / Hosts '},
  {value:'58', viewValue: ' 58 Nodes / Hosts '},
  {value:'59', viewValue: ' 59 Nodes / Hosts '},
  {value:'60', viewValue: ' 60 Nodes / Hosts '},
  {value:'61', viewValue: ' 61 Nodes / Hosts '},
  {value:'62', viewValue: ' 62 Nodes / Hosts '},
  {value:'63', viewValue: ' 63 Nodes / Hosts '},
  {value:'64', viewValue: ' 64 Nodes / Hosts '}

]; 


/// Disk Group Count
selectdgcount: SelectDGCount [] = [
  {value:'1', viewValue: ' 1 Disk Group '},
  {value:'2', viewValue: ' 2 Disk Groups '},
  {value:'3', viewValue: ' 3 Disk Groups '},
  {value:'4', viewValue: ' 4 Disk Groups '},
  {value:'5', viewValue: ' 5 Disk Groups '}

];


/// Select Capacity Disk Count
selectcapdiskcount: SelectCapDiskCount [] =[
  {value:'1', viewValue: ' 1 Drive '},
  {value:'2', viewValue: ' 2 Drives '},
  {value:'3', viewValue: ' 3 Drives '},
  {value:'4', viewValue: ' 4 Drives '},
  {value:'5', viewValue: ' 5 Drives '},
  {value:'6', viewValue: ' 6 Drives '},
  {value:'7', viewValue: ' 7 Drives '}

];


///Select Stripe Count
selectstripecount: SelectStripeCount [] = [
  {value:'1', viewValue: ' 1 Stripe '},
  {value:'2', viewValue: ' 2 Stripes '},
  {value:'3', viewValue: ' 3 Stripes '},
  {value:'4', viewValue: ' 4 Stripes '},
  {value:'5', viewValue: ' 5 Stripes '},
  {value:'6', viewValue: ' 6 Stripes '},
  {value:'7', viewValue: ' 7 Stripes '},
  {value:'8', viewValue: ' 8 Stripes '},
  {value:'9', viewValue: ' 9 Stripes '},
  {value:'10', viewValue: ' 10 Stripes '},
  {value:'11', viewValue: ' 11 Stripes '},
  {value:'12', viewValue: ' 12 Stripes '},

];


/// Select Working Set
selectworkingset: SelectWorkingSetCount [] = [
  {value:'1', viewValue: ' 1 % Working Set '},
  {value:'2', viewValue: ' 2 % Working Set '},
  {value:'3', viewValue: ' 3 % Working Set '},
  {value:'4', viewValue: ' 4 % Working Set '},
  {value:'5', viewValue: ' 5 % Working Set '},
  {value:'6', viewValue: ' 6 % Working Set '},
  {value:'7', viewValue: ' 7 % Working Set '},
  {value:'8', viewValue: ' 8 % Working Set '},
  {value:'9', viewValue: ' 9 % Working Set '},
  {value:'10', viewValue: ' 10 % Working Set '},
  {value:'11', viewValue: ' 11 % Working Set '},
  {value:'12', viewValue: ' 12 % Working Set '},
  {value:'13', viewValue: ' 13 % Working Set '},
  {value:'14', viewValue: ' 14 % Working Set '},
  {value:'15', viewValue: ' 15 % Working Set '},
  {value:'16', viewValue: ' 16 % Working Set '},
  {value:'17', viewValue: ' 17 % Working Set '},
  {value:'18', viewValue: ' 18 % Working Set '},
  {value:'19', viewValue: ' 19 % Working Set '},
  {value:'20', viewValue: ' 20 % Working Set '},
  {value:'21', viewValue: ' 21 % Working Set '},
  {value:'22', viewValue: ' 22 % Working Set '},
  {value:'23', viewValue: ' 23 % Working Set '},
  {value:'24', viewValue: ' 24 % Working Set '},
  {value:'25', viewValue: ' 25 % Working Set '},

];


/// Read Write Ratio

  readWrite: ReadWrite[] = [
    {value: '100', viewValue: '100 Read / 0 Write'},
    {value: '90', viewValue: '90 Read / 10 Write'},
    {value: '80', viewValue: '80 Read / 20 Write'},
    {value: '70', viewValue: '70 Read / 30 Write'},
    {value: '60', viewValue: '60 Read / 40 Write'},
    {value: '50', viewValue: '50 Read /50 Write'},
    {value: '40', viewValue: '40 Read / 60 Write'},
    {value: '30', viewValue: '30 Read / 70 Write'},
    {value: '20', viewValue: '20 Read / 80 Write'},
    {value: '10', viewValue: '10 Read / 90 Write'},
    {value: '0', viewValue: '0 Read / 100 Write'}
  ];


/// Failure to tolerate value  

  fttValue: FTTvalue[] = [
    {value: '1', viewValue: 'Zero Protection'},
    {value: '2', viewValue: '1 Host Failure - Min 3 Hosts'},
    {value: '3', viewValue: '2 Host Failure - Min 5 Hosts'},
    {value: '4', viewValue: '3 Host Failure - Min 7 Hosts'}
  ];


/// Block Size

  blockSize: BlockSize[] = [
    {value: '4' , viewValue: '4 KB'},
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
    { value: '200', viewValue: '200 GB' },
    { value: '400', viewValue: '400 GB' },
    { value: '800', viewValue: '800 GB' },
    { value: '1200', viewValue: '1200 GB' },
    { value: '1600', viewValue: '1600 GB' },
    { value: '2000', viewValue: '2000 GB' },
    { value: '3200', viewValue: '3200 GB' }

  ];


  cachedriveiops: CacheDriveIOPS[] = [
    { value: '10000', viewValue: 'Class B - 10000 IOPS' },
    { value: '20000', viewValue: 'Class C - 20000 IOPS' },
    { value: '30000', viewValue: 'Class D - 30000 IOPS' },
    { value: '100000', viewValue: 'Class E - 100000 IOPS' },
    { value: '150000', viewValue: 'Class F - 150000 IOPS' }

  ];

  

  checkBalance() {
    if ( this.totalIOPS > this.hostTotalIOPS) {
        this.iopswarning = true;
        this.iopsWarnMessage = " Warning : Require more Host IOPS"
        }
        else {
          this.iopsWarnMessage = "" 
          this.iopswarning = false;
        }
    
    if ( this.workingSet > this.totalCacheCapacity )    {
        this.cachewarning = true;
        this.cacheWarnMessage = " Warning :  Require more Host Cache";
        }
        else {
          this.cacheWarnMessage ="";
          this.cachewarning = false;
        }
  } 
    
  vmHeroNumbers() {

    this.checkBalance();

  //// Start - Workload Read Write IOPS

    this.readValue =  Math.round (((this.vmCount * this.iopsperVM) * (this.rwratiovalue/100)));
    this.writeValue = Math.round (((this.vmCount * this.iopsperVM) * ((100 - this.rwratiovalue)/100)));
    this.totalIOPS =  Math.round((this.readValue) + (this.writeValue * (this.stripes) * (this.blockSizevalue/4) * (this.fttvalue)));
    this.guageMax = Math.round((this.readValue + this.totalIOPS));
    
  //// End - Workload Read Write IOPS  
    

  /// Start - Host IOPS

    this.hostTotalIOPS = (this.hostCount * this.dgCount * this.cacheIOPSvalue ) + ( this.capacitydiskCount * this.capcityDiskIOPSvalue );
    
  //// End - Host IOPS
 

  /// Start Cache Workings

    this.totalCacheCapacity = ( this.CacheCapacity * this.hostCount * this.dgCount );
    this.usableCapacity = ( this.vmSize * this.vmCount );
    this.workingSet = ( this.usableCapacity * (this.activeDataSet/100 ));
    this.cacheBalance = (this.totalCacheCapacity - this.workingSet)
    
  /// End Cache Workings

  
  /// Start Console outputs

    console.log( "The Total Capacity is  : " + this.totalCacheCapacity ); 
    console.log( "The Usable Capacity is  : " +this.usableCapacity ); 
    console.log( "The Working Set is  : " +this.workingSet ); 
    console.log( "The VMs Total IOPS is  : " +this.totalIOPS ); 
    console.log( "The Hosts Total IOPS  : " +this.hostTotalIOPS ); 
    console.log ( " ********************* ******************** ")
             

  /// End Console outputs  

  }



 
  constructor() { }

  ngOnInit() { 
    this.vmHeroNumbers();
  }

  ngOnDestroy() { }



}
