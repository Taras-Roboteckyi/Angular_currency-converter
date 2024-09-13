import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css'],
})
export class CurrencyInputComponent {
  @Input() amount!: number;
  @Input() selectedCurrency!: string;
  @Input() currencies!: string[];
  @Output() amountChange = new EventEmitter<number>();
  @Output() currencyChange = new EventEmitter<string>();

  // Метод для обробки зміни суми
  onAmountChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.amountChange.emit(Number(inputElement.value));
  }

  // Метод для обробки зміни валюти
  onCurrencyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.currencyChange.emit(selectedValue);
  }
}
