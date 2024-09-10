import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { CurrencyInputComponent } from './shared/currency-input/currency-input.component';
import { ConversionResultComponent } from './shared/conversion-result/conversion-result.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CurrencyInputComponent, ConversionResultComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
