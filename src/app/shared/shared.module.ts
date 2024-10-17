import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
//I create a shared module
@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class SharedModule {}
