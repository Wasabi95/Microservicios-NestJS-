import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':name')
  async getCountry(@Param('name') name: string) {
    return await this.countryService.getCountryInfo(name);
  }
}
