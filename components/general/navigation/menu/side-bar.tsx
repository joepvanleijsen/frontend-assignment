import React, { useEffect, FC, Fragment, ReactElement, forwardRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
// import useToggle from '@hooks/use-toggle';
import useNavigationMenu from '@hooks/use-navigation-menu';
import useModals from '@hooks/use-modals';
import StrmLogo from '@components/general/logos/strm-logo';
import Heading from '@components/general/heading';
import MainMenuItem from '@components/general/navigation/menu/main-menu-item';
import { getPageUrl, PAGE_PATHS } from '@config/index';
import { motion, useAnimation } from 'framer-motion';

// Icons
// import { HomeIcon, PeopleIcon, ProjectsIcon, SearchIcon } from '@components/general/icons';
import HomeIcon from '@components/general/icons/home';
import PeopleIcon from '@components/general/icons/people';
import ProjectsIcon from '@components/general/icons/projects';
import SearchIcon from '@components/general/icons/search';
import ExpandIcon from '@components/general/icons/expand';
// import { IconProps } from '@libs/interfaces';

// Animation variants
const mainMenuVariants = {
	close: {
		width: 72,
		transition: {
			ease: 'easeOut',
			duration: 0.15,
		},
	},
	open: {
		width: 256,
		transition: {
			duration: 0.25,
		},
	},
};

const lockButtonVariants = {
	hide: {
		opacity: 0,
		transition: {
			// ease: 'easeOut',
			duration: 0.1,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.25,
			delay: 0.1,
		},
	},
};

const NavigationSideBar = ({ className }) => {
	// const [isExpended, setIsExpended] = useState(false);
	// const [isLocked, toggleLocked] = useToggle(false);

	const { isExpended, isLocked, hasSubMenu, expandSidebar, collapseSidebar, toggleLock } = useNavigationMenu();
	const { isSearchModalVisible, showSearchModal, isEditUserNameModalVisible, hideEditUserNameModal } = useModals();

	// Animation controls
	const mainMenuControls = useAnimation();
	const lockButtonControls = useAnimation();

	useEffect(() => {
		if (isExpended) {
			animate('open');
		} else {
			if (!isLocked) {
				animate('close');
			}
		}
	}, [isExpended, isLocked]);

	// Animation sequence method
	const animate = async (variant) => {
		// console.log('animate()', variant);

		if (variant === 'open') {
			mainMenuControls.start(variant);
			await lockButtonControls.start('show');
			return;
		} else if (variant === 'close') {
			lockButtonControls.start('hide');
			return await mainMenuControls.start(variant);
		}
	};

	const handleMouseEnter = () => {
		console.log('handleExpend()');

		// setIsExpended(true);
		expandSidebar();
		// animate('open');
	};

	const handleMouseLeave = () => {
		console.log('handleExpend()');

		if (!isLocked) {
			// setIsExpended(false);
			collapseSidebar();
			// animate('close');
		}
	};

	const handleLock = () => {
		console.log('handleLock()');

		toggleLock();
	};

	const handleSearch = () => {
		console.log('handleSearch()');

		showSearchModal();
	};

	return (
		<Fragment>
			<div className={classNames('fixed flex left-0 top-0 h-full', className)}>
				<motion.nav
					// animate={isExpended ? 'open' : 'closed'}
					animate={mainMenuControls}
					initial='close'
					variants={mainMenuVariants}
					className={classNames(
						'relative h-full overflow-hidden bg-theme-background text-theme-text'
						// isExpended ? 'w-64' : 'w-18'
					)}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<Link href={getPageUrl(PAGE_PATHS.DASHBOARD)}>
						<a className='block w-18 h-18 text-theme-navigation-logo bg-red-500f'>
							<span className='flex items-center justify-center w-18 h-full cursor-pointer bg-gray-400f'>
								<StrmLogo className='block w-9 h-9 ' />
							</span>
						</a>
					</Link>

					{/* <div className='absolute right-3 top-6 flex items-center justify-center w-6 h-6 cursor-pointer hover:opacity-50 transition-opacity duration-300 bg-red-500' onClick={handleExpend}> */}
					{/* {isExpended && ( */}
					<motion.div
						animate={lockButtonControls}
						initial='hide'
						variants={lockButtonVariants}
						className={classNames('absolute right-3 top-5 flex items-center justify-center w-8 h-8 cursor-pointer bg-theme-text bg-opacity-0 hover:bg-opacity-theme-navigation-button-hover transition-colors duration-default rounded-full bg-red-500f', {
							'bg-opacity-theme-navigation-button-hover': isLocked,
							'rotate-180': isLocked,
						})}
						onClick={handleLock}
					>
						<ExpandIcon className='w-3 h-3' />
					</motion.div>
					{/* )} */}

					<ul className='mt-12 mx-4 bg-blackf'>
						<li className=''>
							<MainMenuItem icon={SearchIcon} isActive={isSearchModalVisible} activeClassName='bg-opacity-theme-navigation-button-hover' className='bg-theme-text hover:bg-opacity-theme-navigation-button-hover' onClick={handleSearch}>
								Search
							</MainMenuItem>
						</li>
						<li className='mt-2'>
							<Link href={getPageUrl(PAGE_PATHS.DASHBOARD)} passHref>
								<MainMenuItem href={getPageUrl(PAGE_PATHS.DASHBOARD)} icon={HomeIcon} activeClassName='bg-opacity-theme-navigation-button-hover' className='bg-theme-text hover:bg-opacity-theme-navigation-button-hover'>
									Home
								</MainMenuItem>
							</Link>
						</li>
						<li className='mt-2'>
							<Link href={getPageUrl(PAGE_PATHS.PROJECTS)} passHref>
								<MainMenuItem icon={ProjectsIcon} activeClassName='bg-opacity-theme-navigation-button-hover' className='bg-theme-text hover:bg-opacity-theme-navigation-button-hover'>
									Projects
								</MainMenuItem>
							</Link>
						</li>
						<li className='mt-2'>
							<Link href={getPageUrl(PAGE_PATHS.PEOPLE)} passHref>
								<MainMenuItem icon={PeopleIcon} activeClassName='bg-opacity-theme-navigation-button-hover' className='bg-theme-text hover:bg-opacity-theme-navigation-button-hover'>
									People
								</MainMenuItem>
							</Link>
						</li>
					</ul>
				</motion.nav>
				<nav className='w-64 h-full bg-gray-50 bg-red-500f  border-l border-r border-gray'>
					<header className='w-full h-18 px-5 py-6 border-b border-gray'>
						<Heading size='sm'>Organization</Heading>
					</header>
					<main className='p-4'>
						<ul className=''>
							<li className=''>
								<Link href={getPageUrl(PAGE_PATHS.SETTINGS)} passHref>
									<MainMenuItem className='bg-gray-900 hover:bg-opacity-5'>Settings</MainMenuItem>
								</Link>
							</li>
							<li className='mt-0.5'>
								<Link href={getPageUrl(PAGE_PATHS.ORGANIZATION.INSTALLATION.CONFIGURATION)} passHref>
									<MainMenuItem className='bg-gray-900 hover:bg-opacity-5'>Installation configuration</MainMenuItem>
								</Link>
							</li>
							<li className='mt-0.5'>
								<MainMenuItem className='bg-gray-900 hover:bg-opacity-5'>Installation status</MainMenuItem>
							</li>
							<li className='mt-0.5'>
								<MainMenuItem className='bg-gray-900 hover:bg-opacity-5'>Privacy statement</MainMenuItem>
							</li>
						</ul>
					</main>
				</nav>
			</div>
		</Fragment>
	);
};

export default NavigationSideBar;
