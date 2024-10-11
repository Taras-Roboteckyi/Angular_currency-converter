import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css'],
})
export class CurrencyInputComponent {
  @Input() amount!: number;
  @Input() selectedCurrency!: string;
  @Input() currencies: string[] = [];

  @Output() amountChange = new EventEmitter<number>();
  @Output() currencyChange = new EventEmitter<string>();

  onAmountInput(event: any): void {
    this.amountChange.emit(event.target.value);
  }

  onCurrencySelect(event: any): void {
    this.currencyChange.emit(event.target.value);
    console.log(this.currencyChange);
  }
}
