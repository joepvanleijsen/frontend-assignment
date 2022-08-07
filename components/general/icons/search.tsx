import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const SearchIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' fillRule='evenodd'>
				<path className='fill-current' d='M12.5 11h-.79l-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z' fillRule='nonzero' />
			</g>
		</svg>
	);
};

export default SearchIcon;
