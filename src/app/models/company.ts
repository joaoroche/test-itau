export interface IBusiness {
  id: number;
  name: string;
  business: string;
  valuation: number;
  active: boolean;
  cep: string;
  cnpj: string;
  street?: string;
  neighborhood?: string;
  state?: string;
  city?: string;
}
