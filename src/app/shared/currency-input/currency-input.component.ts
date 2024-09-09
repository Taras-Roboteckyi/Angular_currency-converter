import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent {
  @Input() amount!: number;
  @Input() selectedCurrency!: string;
  @Input() currencies!: string[];
  @Output() amountChange = new EventEmitter<number>();
  @Output() currencyChange = new EventEmitter<string>();

  onAmountChange(value: string) {
    this.amountChange.emit(Number(value));
  }

  onCurrencyChange(value: string) {
    this.currencyChange.emit(value);
  }
}
