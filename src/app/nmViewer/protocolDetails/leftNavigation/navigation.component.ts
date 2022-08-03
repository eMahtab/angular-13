import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'gepm-tech-setting-left-nav-nm',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavComponent implements OnInit {
  selectedScanIndex = 0;
  @Input() leftNavigationData;
  @Output() selectedScan = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public showScanDetails(event: number) {
    console.log('Clicked : ' ,  event);
    this.selectedScanIndex = event;
    this.selectedScan.emit(event);
  }

}
