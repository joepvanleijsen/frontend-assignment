import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getViewedFromNow = (date: string): string => {
	return `Viewed ${dayjs(date).fromNow(true)} ago`;
};
