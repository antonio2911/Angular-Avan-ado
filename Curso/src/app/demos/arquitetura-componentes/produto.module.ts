import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashBoardComponent} from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.router";

@NgModule({
    declarations: [
        ProdutoDashBoardComponent
    ],
    imports: [
        //Obrigatorio
        CommonModule,
        //
        ProdutoRoutingModule
    ],
    exports: []
})
export class ProdutoModule {}