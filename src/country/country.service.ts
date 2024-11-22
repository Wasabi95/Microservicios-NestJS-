import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
  private readonly apiUrl = 'https://restcountries.com/v3.1/name';

  constructor(private readonly httpService: HttpService) {}

  async getCountryInfo(countryName: string): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`${this.apiUrl}/${countryName}`)
      );

      const countryData = response.data[0];
      return {
        name: countryData.name.common,
        capital: countryData.capital?.[0] || 'No disponible',
        population: countryData.population,
        region: countryData.region,
      };
    } catch (error) {
      throw new Error('No se encontró información para este país');
    }
  }
}
