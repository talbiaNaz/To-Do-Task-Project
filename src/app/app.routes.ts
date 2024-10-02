import { Routes } from '@angular/router';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { AddListComponent } from './Components/add-list/add-list.component';
import { ShowListComponent } from './Components/show-list/show-list.component';

export const routes: Routes = [
    { path:'maincomp',component:MainComponentComponent},
    { path:'addlist' , component:AddListComponent},
    { path:'showlist' , component:ShowListComponent}
];
