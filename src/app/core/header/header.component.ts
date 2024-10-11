import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() amount1!: number;
  @Input() amount2!: number;
  @Input() fromCurrency!: string;
  @Input() toCurrency!: string;
  @Input() currencies: string[] = [];

  @Output() amountChange = new EventEmitter<{
    amount: number;
    type: 'from' | 'to';
  }>();
  @Output() currencyChange = new EventEmitter<{
    currency: string;
    type: 'from' | 'to';
  }>();

  //Обробка подій
  onAmountChange(newAmount: number, type: 'from' | 'to'): void {
    this.amountChange.emit({ amount: newAmount, type });
  }

  onCurrencyChange(newCurrency: string, type: 'from' | 'to'): void {
    this.currencyChange.emit({ currency: newCurrency, type });
  }

  /* title = 'Currency Converter';
  amount1 = 0;
  amount2 = 0;
  fromCurrency = 'USD';
  toCurrency = 'UAH';
  currencies = ['USD', 'EUR', 'UAH'];

  // Метод для обробки зміни суми
  onAmountChange(newAmount: number, type: 'from' | 'to'): void {
    if (type === 'from') {
      this.amount1 = newAmount;
      this.convert('from');
    } else {
      this.amount2 = newAmount;
      this.convert('to');
    }
  }

  // Метод для обробки зміни валюти
  onCurrencyChange(newCurrency: string, type: 'from' | 'to'): void {
    if (type === 'from') {
      this.fromCurrency = newCurrency;
      this.convert('from');
    } else {
      this.toCurrency = newCurrency;
      this.convert('to');
    }
  }

  // Метод для конвертації валют
  convert(direction: 'from' | 'to'): void {
    // Логіка конвертації валют
    if (direction === 'from') {
      // Рахуємо amount2
    } else {
      // Рахуємо amount1
    }
  } */
}
