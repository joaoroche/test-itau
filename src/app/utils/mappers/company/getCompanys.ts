import { IBusiness } from "src/app/models/company";

export const mapperGetCompanysFormatted = (company: IBusiness[]) => {
  return company.map((company) => {
    return {
      ...company,
      formattedValuation: company.valuation.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    };
  })
}
