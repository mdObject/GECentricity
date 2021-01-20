import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AllergyComponent, EnumToArrayPipe } from './allergy/allergy.component';
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





@NgModule({
  declarations: [
    AppComponent,
    AllergyComponent,
    EnumToArrayPipe,
    PatientHeaderComponent,
    PatientPersonalInformationComponent,
    PatientAddressComponent,
    SimulatorViewComponent,
    PatientContactsComponent,
    PatientPhoneComponent,
    PatientProblemsComponent,
    SidenavComponent

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [TitleCasePipe, MdObjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
