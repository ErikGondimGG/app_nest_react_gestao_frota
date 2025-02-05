export function getNewDateTime(dateToConvert?: Date): Date {
  const timeZone = 'America/Sao_Paulo';
  const dateToUse = dateToConvert ? dateToConvert : new Date();

  // Create a date string in the specified timezone
  const localDateString = new Intl.DateTimeFormat('pt-BR', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(dateToUse);

  // Split the formatted string into components
  const [day, month, year, hour, minute, second] =
    localDateString.split(/[/,\s:]+/);

  // Create a new Date object in local timezone
  const localDate = new Date(
    Date.UTC(+year, +month - 1, +day, +hour, +minute, +second),
  );

  return localDate;
}
