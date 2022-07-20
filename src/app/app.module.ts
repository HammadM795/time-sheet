import { NgModule } from '@angular/core';
// import { showIcon } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeFormTableComponent } from './employee-form-table/employee-form-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeFormTableComponent,

  ],
  imports: [

    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CalendarModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputNumberModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    RippleModule,
    InputTextModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
