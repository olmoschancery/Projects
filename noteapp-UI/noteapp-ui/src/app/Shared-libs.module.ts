import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from'@angular/material/list'

@NgModule({
    exports:[
        CommonModule,
        MatDividerModule,
        MatListModule
    ],
    imports:[

    ],
})

export class SharedLibModule{

}