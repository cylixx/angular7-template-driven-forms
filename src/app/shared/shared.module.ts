import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule  // agregamos este para poder router los links
  ],
  exports: [  // agregamos esto para que cada vez que accedamos a este modulo tengamos acceso a este componente ColumnOneComponent
    ColumnOneComponent
  ],
  // bootstrap: [ColumnOneComponent, HeaderComponent]
})
export class SharedModule { }
