import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EnumToArrayPipe } from './enum.to.array.pipe';

const PIPES = [
  EnumToArrayPipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ],
  declarations: [
    ...PIPES
  ]
})

export class EnumToArrayModule { }
