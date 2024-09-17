/* import { Component, OnInit } from '@angular/core';
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
 */

import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './shared/currency.service'; // Імпортуємо сервіс

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Currency Converter';

  amount1 = 1;
  amount2 = 0;
  fromCurrency = 'USD';
  toCurrency = 'UAH';
  currencies = ['USD', 'EUR', 'UAH'];
  exchangeRates: { [key: string]: number } = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.loadExchangeRates(this.fromCurrency);
  }

  // Метод для завантаження курсів валют
  loadExchangeRates(baseCurrency: string): void {
    this.currencyService.getExchangeRates(baseCurrency).subscribe(
      (data) => {
        this.exchangeRates = data.rates;
        this.convert('from');
      },
      (error) => {
        console.error('Error loading exchange rates:', error);
      }
    );
  }

  onAmountChange(newAmount: number, type: 'from' | 'to'): void {
    if (type === 'from') {
      this.amount1 = newAmount;
      this.convert('from');
    } else {
      this.amount2 = newAmount;
      this.convert('to');
    }
  }

  onCurrencyChange(newCurrency: string, type: 'from' | 'to'): void {
    if (type === 'from') {
      this.fromCurrency = newCurrency;
      this.loadExchangeRates(newCurrency); // Завантажуємо нові курси при зміні валюти
    } else {
      this.toCurrency = newCurrency;
      this.convert('from');
    }
  }

  // Метод для конвертації валют
  convert(type: 'from' | 'to'): void {
    const rate = this.getExchangeRate(this.fromCurrency, this.toCurrency);

    if (type === 'from') {
      this.amount2 = this.amount1 * rate;
    } else {
      this.amount1 = this.amount2 / rate;
    }
  }

  // Метод для отримання курсу валют
  getExchangeRate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    const rate = this.exchangeRates[to];
    return rate || 1;
  }
}
