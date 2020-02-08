export const hasTwoDecimals = (price: string): boolean => /^\d*\.?\d{0,2}$/.test(price);
