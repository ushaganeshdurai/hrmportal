import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import
{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
@NgModule({

  declarations: [

    AppComponent,
     SignupPageComponent,
     SigninPageComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],

  providers: [ ],

  bootstrap: [AppComponent]

})

export class AppModule { } 