const countryOptions = new Map([
  ['pt-BR', 'BRL'],
  ['en-US', 'USD'],
])

export type Country = 'pt-BR' | 'en-US';

export const formattedPrice = (price: number, country: Country): string => {
  const countryCurrency = countryOptions.get(country);

  return price.toLocaleString(
    country,
    {
      style: 'currency',
      currency: countryCurrency,
    }
  );
}
