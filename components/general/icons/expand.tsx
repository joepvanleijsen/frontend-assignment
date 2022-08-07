import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const ExpandIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 13 12' xmlns='http://www.w3.org/2000/svg'>
			<path d='M.59 1.41 5.18 6 .59 10.59 2 12l6-6-6-6L.59 1.41ZM11 0h2v12h-2V0Z' fill='#fff' fillRule='nonzero' />
		</svg>
	);
};

export default ExpandIcon;
