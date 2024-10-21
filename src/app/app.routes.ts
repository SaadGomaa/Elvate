import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { CatdetailsComponent } from './components/catdetails/catdetails.component';


export const routes: Routes = [

    {path:'', redirectTo:'products', pathMatch:'full'},
    {path:'products', component:ProductsComponent, title:'Products'},
    {path:'categories', component:CategoriesComponent, title:'Categories'},
    {path:'details/:id', component:DetailsComponent, title:'Details of product'},
    {path:'catdetials/:name', component:CatdetailsComponent, title:'Details of categories'},
    {path:'**', component:NotfoundComponent, title:'Notfound'}

];
