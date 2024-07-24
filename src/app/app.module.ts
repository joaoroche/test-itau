import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';

import { CompanyComponent } from './pages/company/company.component';
import { IdCompanyComponent } from './pages/company/id-company/id-company.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyComponent,
    IdCompanyComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
