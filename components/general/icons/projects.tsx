import { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '@libs/interfaces';

const ProjectsIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg className={classNames(className)} viewBox='0 0 19 18' xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' fillRule='evenodd'>
				<path className='fill-current' d='M4 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM13.5 0A5.51 5.51 0 0 0 8 5.5c0 3.03 2.47 5.5 5.5 5.5S19 8.53 19 5.5 16.53 0 13.5 0Zm0 9C11.57 9 10 7.43 10 5.5S11.57 2 13.5 2 17 3.57 17 5.5 15.43 9 13.5 9Z' fillRule='nonzero' />
			</g>
		</svg>
	);
};

export default ProjectsIcon;
