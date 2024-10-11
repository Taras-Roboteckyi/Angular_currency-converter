import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversion-result',
  templateUrl: './conversion-result.component.html',
  styleUrls: ['./conversion-result.component.css'],
})
export class ConversionResultComponent {
  @Input() amount1!: number;
  @Input() amount2!: number;
  @Input() fromCurrency!: string;
  @Input() toCurrency!: string;
}
