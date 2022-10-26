import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ProdutoDashBoardComponent} from "./produto-dashboard/produto-dashboard.component";

const produtoRotas: Routes = [
    {path: '', component: ProdutoDashBoardComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(produtoRotas)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule{}