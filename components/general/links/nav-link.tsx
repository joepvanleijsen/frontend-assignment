import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, as, activeclassname, children, ...restProps }) => {
	const router = useRouter();

	const activeClassName = activeclassname;

	// console.log('router.pathname: ' , router.pathname);
	// console.log('router.asPath: ' , router.asPath);

	let className = children.props.className || '';
	//   if (router.pathname === href) {
	if (router.pathname.indexOf(href) !== -1) {
		className = `${className} ${activeClassName}`;
	}

	return (
		<Link href={href} as={as} {...restProps}>
			{React.cloneElement(children, { className })}
		</Link>
	);
};

export default NavLink;
