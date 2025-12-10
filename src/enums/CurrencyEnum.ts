const CurrencyEnum = {
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
} as const;

type CurrencyEnum = (typeof CurrencyEnum)[keyof typeof CurrencyEnum];

export { CurrencyEnum as currencyEnum }