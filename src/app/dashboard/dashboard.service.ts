import { Injectable } from '@angular/core';
import { Panel } from '../shared/models/panel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  panelList: Panel[] = [
    {
      width: 4,
      height: 300,
      column: 1,
      position: 1,
      color: 'red',
    },
    {
      width: 2,
      height: 100,
      column: 2,
      position: 2,
      color: 'blue',
    },
    {
      width: 2,
      height: 100,
      column: 2,
      position: 1,
      color: 'green',
    },
    {
      width: 2,
      height: 100,
      column: 2,
      position: 3,
      color: 'yellow',
    },
    {
      width: 2,
      height: 300,
      column: 3,
      position: 1,
      color: 'purple',
    },
    {
      width: 4,
      height: 300,
      column: 4,
      position: 1,
      color: 'maroon',
    },
    {
      width: 4,
      height: 300,
      column: 5,
      position: 1,
      color: 'salmon',
    },
    {
      width: 2,
      height: 200,
      column: 6,
      position: 1,
      color: 'grey',
    },
    {
      width: 2,
      height: 100,
      column: 6,
      position: 1,
      color: 'darkorange',
    }
  ];

  constructor() { }
}
