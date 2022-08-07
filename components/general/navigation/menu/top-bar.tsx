import { useRef } from 'react';
import classNames from 'classnames';
import Avatar from '@components/general/avatar';
import NotificationIcon from '@components/general/icons/notification';
// import NotificationIcon from '@icons/notification';
import TextLink from '@components/general/links/text-link';
import { TextLinkType } from '@libs/interfaces';
import Link from 'next/link';
import { PAGE_PATHS, getPageUrl } from '@config/index';
import useNavigationMenu from '@hooks/use-navigation-menu';
import AccountPopover from '@components/general/navigation/popover/account';
import useOnClickOutside from '@hooks/use-on-click-outside';

const user = {
	name: 'Darren Adams',
	email: 'email@company.com',
};

const avatar = {
	initials: 'DA',
	image: {
		src: 'http://localhost:3000/dummy/joep-van-leijsen-400x400.jpg',
	},
};

const NavigationTopBar = ({ className }) => {
	const { isAccountMenuVisible, toggleAccountMenu, hideAccountMenu } = useNavigationMenu();
	const ref = useRef();

	useOnClickOutside(ref, () => {
		console.log('useOnClickOutside()');
		hideAccountMenu();
	});

	const handleToggleHelp = (event) => {
		console.log('handleToggleHelp()');
		event.preventDefault();
	};

	const handleToggleNotifications = (event) => {
		console.log('handleToggleNotifications()');
		event.preventDefault();
	};

	const handleToggleAccountMenu = (event) => {
		console.log('handleToggleAccountMenu()', event);
		console.log('event.target:', event.target);
		console.log('event.target.menuItem:', event.target.menuItem);
		event.preventDefault();

		toggleAccountMenu();
	};

	return (
		<nav className={classNames('relatve fixed flex top-0 left-0 h-18 w-full px-6 items-center justify-end bg-body border-b border-gray', className)}>
			<Link href={getPageUrl(PAGE_PATHS.UPGRADE)} passHref>
				<TextLink type={TextLinkType.HIGHLIGHT} className='flex h-full px-3 items-center'>
					Upgrade
				</TextLink>
			</Link>

			<TextLink type={TextLinkType.MUTED} className='flex h-full px-3 items-center' onClick={handleToggleHelp}>
				Help
			</TextLink>

			<TextLink type={TextLinkType.MUTED} className='flex h-full px-3 items-center' onClick={handleToggleNotifications}>
				<NotificationIcon className='h-5' />
			</TextLink>

			<div ref={ref} className='flex h-full items-center px-3 cursor-pointer' onClick={handleToggleAccountMenu}>
				<Avatar image={avatar.image} initials={avatar.initials} className='' />

				<AccountPopover user={user} avatar={avatar} className='absolute top-full right-6 -mt-3' />
			</div>
		</nav>
	);
};

export default NavigationTopBar;
