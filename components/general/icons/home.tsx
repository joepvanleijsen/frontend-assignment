import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const HomeIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 18 15' xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' fillRule='evenodd'>
				<path d='M-1-2h20v20H-1z' />
				<path className='fill-current' d='m9 2.742 4.167 3.75V13H11.5V8h-5v5H4.833V6.492L9 2.742M9 .5.667 8h2.5v6.667h5v-5h1.666v5h5V8h2.5L9 .5Z' fillRule='nonzero' />
			</g>
		</svg>
	);
};

export default HomeIcon;

{
	/* <svg width='18' height='15' xmlns='http://www.w3.org/2000/svg'>
	<g fill='none' fill-rule='evenodd'>
		<path d='M-1-2h20v20H-1z' />
		<path d='m9 2.742 4.167 3.75V13H11.5V8h-5v5H4.833V6.492L9 2.742M9 .5.667 8h2.5v6.667h5v-5h1.666v5h5V8h2.5L9 .5Z' fill='#FFF' fill-rule='nonzero' />
	</g>
</svg>; */
}
