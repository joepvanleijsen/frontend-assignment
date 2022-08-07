import { forwardRef, ReactElement, MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface PopoverMenuItemProps {
	// children: string | ReactElement;
	// onClick?: Function;
	// className?: string;

	children: string | ReactElement;
	href?: string;
	isActive?: boolean;
	activeClassName?: string;
	className?: string;
	onClick?: MouseEventHandler;
	// All other props
	// [x: string]: any;
}

const PopoverMenuItem = forwardRef<HTMLAnchorElement, PopoverMenuItemProps>(({ children, href, isActive, /*activeClassName,*/ className, onClick, ...restProps }: PopoverMenuItemProps, ref) => {
	const router = useRouter();
	console.log('router:', router);
	console.log('router.pathname:', router.pathname);

	const activeClassName = 'bg-gray-50';

	if (isActive || (href && (router.pathname.indexOf(href) !== -1 || router.asPath.indexOf(href) !== -1))) {
		className = `${className} ${activeClassName}`;
		console.log('total className:', className);
	}

	return (
		<a ref={ref} href={href as string | undefined} className={classNames('block px-9 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-default cursor-pointer', className)} onClick={onClick} {...restProps}>
			{children}
		</a>
	);
});

export default PopoverMenuItem;
