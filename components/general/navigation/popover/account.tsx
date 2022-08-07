import { FC, ReactElement, useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeycloak } from '@react-keycloak/ssr';
import useOnClickOutside from '@hooks/use-on-click-outside';
import useNavigationMenu from '@hooks/use-navigation-menu';
// import { useKeycloak } from '@react-keycloak/web';
import classNames from 'classnames';
import Heading from '@components/general/heading';
import Avatar from '@components/general/avatar';
import PopoverMenuItem from '@components/general/navigation/popover/popover-menu-item';
import { getPageUrl, PAGE_PATHS } from '@config/index';

// Modals hook
// import useModals from '@hooks/use-modals';

// Animation
// const overlayVariants = {
// 	show: {
// 		opacity: 1,
// 		transition: {
// 			duration: 0.25,
// 			ease: 'easeOut',
// 		},
// 	},
// 	hide: {
// 		opacity: 0,
// 		transition: {
// 			duration: 0.25,
// 			ease: 'easeOut',
// 		},
// 	},
// };

const popoverVariants = {
	show: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.25,
			ease: 'easeOut',
		},
	},
	hide: {
		opacity: 0,
		translateY: 18,
		transition: {
			duration: 0.15,
			ease: 'easeOut',
		},
	},
	initial: {
		opacity: 0,
		translateY: 18,
	},
};

interface Image {
	src: string;
}

interface User {
	name: string;
	email: string;
}

interface Avatar {
	initials: string;
	image: Image;
}

interface AccountPopoverProps {
	user: User;
	avatar: Avatar;
	// name: string;
	// email: string;
	// ref: any;
	className: string;
}

const AccountPopover: FC<AccountPopoverProps> = ({ user, avatar, className }) => {
	console.log('AccountPopover()', []);

	const { keycloak, initialized } = useKeycloak();
	const { hideAccountMenu, isAccountMenuVisible: isVisible } = useNavigationMenu();
	const isAuthenticated = (): boolean => {
		return !!initialized && !!keycloak && !!keycloak.authenticated;
	};

	// Hide when clicked outside menu
	// const ref = useRef();
	// useOnClickOutside(ref, () => {
	// 	console.log('useOnClickOutside()');
	// 	hideAccountMenu();
	// });

	const handleLogout = (event) => {
		console.log('handleLogout()');
		event.preventDefault();

		if (isAuthenticated() && keycloak) {
			// @ts-ignore
			keycloak.logout();
		}

		hideAccountMenu();
	};

	const handleMenuItemClick = (event) => {
		event.stopPropagation();

		hideAccountMenu();
	};

	const handleClick = (event) => {
		event.stopPropagation();
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					key='dialog'
					initial='initial'
					animate='show'
					exit='hide'
					variants={popoverVariants}
					// ref={ref}
					className={classNames('py-9 w-full max-w-md bg-body border drop-shadow-lg rounded cursor-auto', className)}
					onClick={handleClick}
				>
					<header className='px-9'>
						<div className='flex items-center'>
							<Avatar {...avatar} />
							<div className='ml-4'>
								{user?.name && <Heading size='sm'>{user.name}</Heading>}
								{user?.email && <p className='text-gray-500'>{user.email}</p>}
							</div>
						</div>
					</header>
					<nav className='mt-4'>
						<ul>
							<li>
								<Link href={getPageUrl(PAGE_PATHS.SETTINGS)} passHref>
									<PopoverMenuItem onClick={handleMenuItemClick}>Settings</PopoverMenuItem>
								</Link>
							</li>
							<li>
								<Link href={getPageUrl(PAGE_PATHS.ORGANIZATION)} passHref>
									<PopoverMenuItem onClick={handleMenuItemClick}>Organization</PopoverMenuItem>
								</Link>
							</li>
							<li>
								<Link href={getPageUrl(PAGE_PATHS.BILLING)} passHref>
									<PopoverMenuItem onClick={handleMenuItemClick}>Billing</PopoverMenuItem>
								</Link>
							</li>
							<li>
								<PopoverMenuItem onClick={handleLogout}>Sign out</PopoverMenuItem>
							</li>
						</ul>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);

	// // Variables
	// const { isSearchModalVisible: isVisible, showSearchModal, hideSearchModal } = useModals();
	// const acceptButtonRef = useRef(null);

	// // Methods
	// const closeHandle = () => {
	// 	console.log('closeHandle()');

	// 	hideSearchModal();
	// };

	// return (
	// 	<AnimatePresence>
	// 		{isVisible && (
	// 			<Dialog initialFocus={acceptButtonRef} open={isVisible} onClose={closeHandle} className='fixed z-20 inset-0 overflow-y-auto'>
	// 				<div className='flex items-centerf justify-center min-h-screen p-3 sm:p-6'>
	// 					<motion.div key='overlay' initial='hide' animate={isVisible ? 'show' : 'hide'} exit='hide' variants={overlayVariants}>
	// 						<Dialog.Overlay className='fixed inset-0 bg-gray-900 opacity-70 backdrop-blur-smf' />
	// 					</motion.div>

	// 					<motion.div key='dialog' initial='initial' animate='show' exit='hide' variants={popoverVariants} className='relative mt-24 w-full h-96 px-12 py-9 bg-body max-w-2xl mx-auto'>
	// 						<Heading size='md'>Search Modal</Heading>
	// 					</motion.div>
	// 				</div>
	// 			</Dialog>
	// 		)}
	// 	</AnimatePresence>
	// );
};

export default AccountPopover;
