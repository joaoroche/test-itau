import { IBusiness } from "src/app/models/company";
import { Country, formattedPrice } from "../../functions/price";

export const mapperGetCompanysFormatted = (company: IBusiness[], country: Country) => {
  return company.map((company) => {
    return {
      ...company,
      formattedValuation: formattedPrice(company.valuation, country),
    };
  })
}
