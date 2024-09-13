import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // Базовий URL API

  constructor(private http: HttpClient) {}

  // Метод для отримання курсу валют, на основі базової валюти
  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${baseCurrency}`);
  }
}
