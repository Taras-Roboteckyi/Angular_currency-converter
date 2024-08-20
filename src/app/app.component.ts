import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Currency Converter';
  rates: { [key: string]: number } = {};
  currencies: string[] = [];
  amount = 1;
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  convertedAmount = 0;
  powers: string[] = ['Super Strength', 'Flight', 'Invisibility', 'Telepathy'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.rates = data.rates;
      this.currencies = Object.keys(this.rates);
      this.convert();
    });
  }

  convert(): void {
    if (this.fromCurrency && this.toCurrency) {
      const rate = this.rates[this.toCurrency] / this.rates[this.fromCurrency];
      this.convertedAmount = this.amount * rate;
    }
  }
}
