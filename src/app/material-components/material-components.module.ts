import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card'

const materialComponents = [MatCardModule] ;

@NgModule({
    declarations:[],
    imports:[...materialComponents],
    exports:[...materialComponents]
})




export class MaterialComponentsModule {

}