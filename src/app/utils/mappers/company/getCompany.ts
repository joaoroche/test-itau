import { IBusiness } from 'src/app/models/company';
import { Country, formattedPrice } from '../../functions/price';

export const mapperGetCompanyFormatted = (
  company: IBusiness,
  country: Country
) => {
  return {
    ...company,
    formattedValuation: formattedPrice(company.valuation, country),
  };
};
