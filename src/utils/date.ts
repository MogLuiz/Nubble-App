import {parseISO, differenceInSeconds, format} from 'date-fns';

const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const month = day * 30;

const formatRelative = (dateISO: string): string => {
  const date = parseISO(dateISO);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < minute) {
    return `${diffInSeconds} s`;
  }

  if (diffInSeconds < hour) {
    const diffInMinutes = Math.round(diffInSeconds / minute);
    return `${diffInMinutes} m`;
  }

  if (diffInSeconds < day) {
    const diffInHours = Math.floor(diffInSeconds / hour);
    return `${diffInHours} h`;
  }

  if (diffInSeconds < week) {
    const diffInDays = Math.floor(diffInSeconds / day);
    return `${diffInDays} d`;
  }

  if (diffInSeconds < month) {
    const diffInWeeks = Math.floor(diffInSeconds / week);
    return `${diffInWeeks} sem`;
  }

  const diffInMonths = Math.floor(diffInSeconds / month);
  if (diffInMonths < 12) {
    return `${diffInMonths} m`;
  }

  return format(date, 'dd/MM/yyyy');
};

export const dateUtils = {formatRelative};
