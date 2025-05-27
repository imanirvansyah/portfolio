import { TZDate } from '@date-fns/tz';
import { format } from 'date-fns';

export function getCurrentTimeInTimezone() {

  const now = new Date();
  const date = new TZDate(now);

  return format(date, "hh:mm:ss a 'GMT'X")
}