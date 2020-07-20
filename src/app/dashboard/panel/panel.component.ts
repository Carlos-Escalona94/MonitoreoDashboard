import { OnInit, Component, Input } from '@angular/core';
import { Panel } from 'src/app/shared/models/panel';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
    
    @Input() properties: Panel;

    constructor(){

    }

    ngOnInit(){

    }
}