import React, { FC, ReactElement, forwardRef, MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { IconProps } from '@interfaces/general';

export interface MainMenuItemProps {
	children: string | ReactElement;
	icon?: FC<IconProps>;
	href?: string;
	isActive?: boolean;
	activeClassName?: string;
	onClick?: MouseEventHandler;
	className?: string;
}

const MainMenuItem = forwardRef<HTMLAnchorElement, MainMenuItemProps>(({ children, href, icon, isActive, activeClassName, onClick, className, ...restProps }: MainMenuItemProps, ref) => {
	const Icon = icon;

	const router = useRouter();
	console.log('router:', router);
	console.log('router.pathname:', router.pathname);

	if (isActive || (href && (router.pathname.indexOf(href) !== -1 || router.asPath.indexOf(href) !== -1))) {
		className = `${className} ${activeClassName}`;
		console.log('total className:', className);
	}

	return (
		<a
			ref={ref}
			href={href as string | undefined}
			className={classNames(
				'flex items-center h-10 bg-opacity-0 rounded transition-all duration-default cursor-pointer select-none',
				{ 'px-4': !icon },
				// { [`${activeClassName}`]: isActive },
				className
			)}
			onClick={onClick}
			{...restProps}
		>
			{Icon && (
				<span className='flex w-10 h-10 px-2.5 items-center justify-center'>
					<Icon className='w-5 h-5' />
				</span>
			)}
			<span className={classNames('block', { 'ml-4': icon })}>{children}</span>
		</a>
	);
});

export default MainMenuItem;
