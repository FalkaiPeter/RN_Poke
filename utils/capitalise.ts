export const capitalise = (str: string) =>
  str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
