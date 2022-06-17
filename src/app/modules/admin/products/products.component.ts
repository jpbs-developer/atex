import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ProductsComponent implements OnInit {
  dataSource = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  columnsToDisplay = [
    'contract',
    'name_of_work',
    'date_init',
    'contract_of_work',
    'actions',
  ];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: any;
  constructor() {}

  ngOnInit(): void {}
}
