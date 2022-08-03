import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gepm-tech-setting-middle-section-nm',
  templateUrl: './middleSection.component.html',
  styleUrls: ['./middleSection.component.css']
})
export class MiddleSectionomponent implements OnInit {
  @Input() middleSectionData;
  selectedAccordionIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  expandAccordion(accordionIndex) {
    console.log('Selected Accordion : ' + accordionIndex);
    this.selectedAccordionIndex = accordionIndex;
  }

}
