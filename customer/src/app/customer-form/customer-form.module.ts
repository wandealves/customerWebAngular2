import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerFormComponent } from './customer-form.component';
import {CustomerFromService} from './customer-form.service';

@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [CustomerFormComponent],
    declarations: [CustomerFormComponent],
    providers:[CustomerFromService]
})
export class CustomerFormModule { }
