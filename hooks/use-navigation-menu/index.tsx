// import { useEffect, useState } from 'react';

// Context
import { useInterfaceStateContext, useInterfaceDispatchContext } from '@contexts/index';

const useNavigationMenu = () => {
	console.log('useNavigationMenu()');

	const interfaceState = useInterfaceStateContext();
	console.log('useNavigationMenu interfaceState:', interfaceState);

	// const [isExpended, setIsExpended] = useState(false);
	// const [isLocked, setIsLocked] = useState(false);

	// useEffect(() => {
	// 	console.log('interfaceState.navigation.isExpended:', interfaceState?.navigation?.isExpended);

	// 	if (interfaceState?.navigation?.isExpended) {
	// 		setIsExpended(interfaceState.navigation.isExpended);
	// 	}
	// }, [interfaceState?.navigation?.isExpended]);

	// const { navigation } = interfaceState;

	// console.log('useNavigation navigation:', navigation);
	// console.log(
	//   'useNavigation navigation.isOpen:',
	//   navigation.isOpen
	// );

	// const isOpen = false;
	// const isOpen = navigation.isOpen;
	// console.log('useNavigation isOpen:', isOpen);

	const dispatch = useInterfaceDispatchContext();
	// const [isOpen, setOpen] = useState(true);

	const openMobileNavigation = () => {
		dispatch({
			type: 'OPEN_MOBILE_NAVIGATION',
		});
	};
	const closeMobileNavigation = () => {
		dispatch({
			type: 'CLOSE_MOBILE_NAVIGATION',
		});
	};

	const expandSidebar = () => {
		dispatch({
			type: 'EXPAND_NAVIGATION_SIDEBAR',
			// payload: {
			// 	isExpended: true,
			// },
		});
	};
	const collapseSidebar = () => {
		dispatch({
			type: 'COLLAPSE_NAVIGATION_SIDEBAR',
			// payload: {
			// 	isExpended: false,
			// },
		});
	};
	const toggleLock = () => {
		dispatch({
			type: 'TOGGLE_NAVIGATION_SIDEBAR_LOCK',
			// payload: {
			// 	// value,
			// },
		});
	};
	const showAccountMenu = () => {
		dispatch({
			type: 'SHOW_ACCOUNT_MENU',
		});
	};
	const hideAccountMenu = () => {
		dispatch({
			type: 'HIDE_ACCOUNT_MENU',
		});
	};
	const toggleAccountMenu = () => {
		dispatch({
			type: 'TOGGLE_ACCOUNT_MENU',
		});
	};

	const hideNotificationMenu = () => {
		dispatch({
			type: 'HIDE_NOTIFICATION_MENU',
		});
	};

	const showNotificationMenu = () => {
		dispatch({
			type: 'SHOW_NOTIFICATION_MENU',
		});
	};

	const hideHelpMenu = () => {
		dispatch({
			type: 'HIDE_HELP_MENU',
		});
	};

	const showHelpMenu = () => {
		dispatch({
			type: 'SHOW_HELP_MENU',
		});
	};

	const setBreadcrumbItems = (items) => {
		dispatch({
			type: 'SET_BREADCRUMB_ITEMS',
			payload: {
				items,
			},
		});
	};

	return {
		// isSearchModalOpen: interfaceState.search.display,
		isExpended: interfaceState.navigation.sidebar.isExpended,
		isLocked: interfaceState.navigation.sidebar.isLocked,
		isOpenOnMobile: interfaceState.navigation.sidebar.isOpenOnMobile,
		hasSubMenu: interfaceState.navigation.sidebar.hasSubMenu,
		expandSidebar,
		collapseSidebar,
		openMobileNavigation,
		closeMobileNavigation,
		toggleLock,
		isAccountMenuVisible: interfaceState.navigation.topbar.account.menu.display,
		showAccountMenu,
		hideAccountMenu,
		toggleAccountMenu,
		isNotificationMenuVisible: interfaceState.navigation.topbar.notifications.menu.display,
		hideNotificationMenu,
		showNotificationMenu,
		isHelpMenuVisible: interfaceState.navigation.topbar.help.menu.display,
		hideHelpMenu,
		showHelpMenu,
		breadcrumb: interfaceState.navigation.topbar.breadcrumb,
		setBreadcrumbItems,
	};
};

export default useNavigationMenu;
