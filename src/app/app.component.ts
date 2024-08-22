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
  amount1 = 1;
  amount2 = 0;
  fromCurrency = 'USD';
  toCurrency = 'EUR';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.rates = data.rates;
      this.currencies = Object.keys(this.rates);
      this.convert('from');
    });
  }

  convert(direction: 'from' | 'to'): void {
    if (this.fromCurrency && this.toCurrency) {
      if (direction === 'from') {
        const rate =
          this.rates[this.toCurrency] / this.rates[this.fromCurrency];
        this.amount2 = this.amount1 * rate;
      } else if (direction === 'to') {
        const rate =
          this.rates[this.fromCurrency] / this.rates[this.toCurrency];
        this.amount1 = this.amount2 * rate;
      }
    }
  }
}
