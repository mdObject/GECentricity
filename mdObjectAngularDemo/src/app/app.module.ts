import { TitleCasePipe } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AllergyComponent } from './allergy/allergy.component';
import { AppComponent } from './app.component';
import { PatientAddressComponent } from './components/patient-address/patient-address.component';
import { PatientContactsComponent } from './components/patient-contacts/patient-contacts.component';
import { PatientPersonalInformationComponent } from './components/patient-personal-information/patient-personal-information.component';
import { PatientPhoneComponent } from './components/patient-phone/patient-phone.component';
import { PatientProblemsComponent } from './components/patient-problems/patient-problems.component';
import { SimulatorViewComponent } from './components/simulator-view/simulator-view.component';
import { MdObjectServiceService } from './md-object-service.service';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PatientAlergiesComponent } from './components/patient-alergies/patient-alergies.component';
import { DeleteDialogComponent } from './components/patient-alergies/delete-dialog/delete-dialog.component';
import { EnumToArrayModule } from './pipes/enum.to.array/enum.to.array.module';
import { LogComponent } from './components/log/log.component';
import { AboutViewComponent } from './components/about/about.component';
import { GlobalErrorHandler } from './global-error-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    AllergyComponent,
    PatientHeaderComponent,
    PatientPersonalInformationComponent,
    PatientAddressComponent,
    SimulatorViewComponent,
    PatientContactsComponent,
    PatientPhoneComponent,
    PatientProblemsComponent,
    SidenavComponent,
    PatientAlergiesComponent,
    DeleteDialogComponent,
    LogComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    EnumToArrayModule
  ],
  providers: [
    TitleCasePipe,
    MdObjectServiceService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
