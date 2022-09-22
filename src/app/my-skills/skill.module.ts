import { NgModule } from "@angular/core";
import { MaterialComponentsModule } from "../material-components/material-components.module";
import { MySkillComponent } from "./my-skills.component";
import { SkillComponent } from "./skill/skill.component";

@NgModule({
    declarations:[MySkillComponent,SkillComponent] ,
    exports :[MySkillComponent,SkillComponent] ,
    imports :[MaterialComponentsModule],
    providers :[] 
})


export class SkillModule {}