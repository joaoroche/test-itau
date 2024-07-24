import { IBusiness } from "src/app/models/company";

export const mapperGetCompanyFormatted = (company: IBusiness) => {
  return {
    ...company,
    formattedValuation: company.valuation.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
  }
}
