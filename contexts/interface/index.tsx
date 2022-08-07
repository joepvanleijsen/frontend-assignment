import { createContext, useContext, useReducer } from 'react';

const InterfaceStateContext = createContext(null);
const InterfaceDispatchContext = createContext(null);

const breadcrumbItems = [
	{
		label: 'Projects',
		url: 'projects',
	},
	{
		label: 'E-commerce',
		url: '/projects/e-commerce/',
	},
];

const initialState = {
	modals: {
		search: {
			display: false, // 'isVisible' better option?
		},
		editUserName: {
			display: false,
		},
	},
	navigation: {
		topbar: {
			breadcrumb: {
				// items: breadcrumbItems,
				items: [],
			},
			help: {
				menu: {
					display: false,
				},
			},
			notifications: {
				menu: {
					display: false,
				},
			},
			account: {
				menu: {
					display: false,
				},
			},
		},
		sidebar: {
			isOpenOnMobile: false,
			isExpended: false,
			isLocked: false,
			hasSubMenu: false,
		},
	},
};

function reducer(state = initialState, action) {
	const { type, payload } = action;

	console.log('reducer()', [type, payload]);

	console.log('reducer()', [state, action]);
	console.log('action.type:', action.type);

	switch (type) {
		case 'SET_BREADCRUMB_ITEMS':
			console.log('SET_BREADCRUMB_ITEMS');
			console.log('payload:', payload);
			console.log('payload.items:', payload.items);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						breadcrumb: {
							...state.navigation.topbar.breadcrumb,
							items: payload.items,
						},
					},
				},
			};
		case 'OPEN_MOBILE_NAVIGATION':
			console.log('OPEN_MOBILE_NAVIGATION');

			return {
				...state,
				navigation: {
					...state.navigation,
					sidebar: {
						...state.navigation.sidebar,
						isOpenOnMobile: true,
						isExpended: true,
						// isLocked: true,
					},
				},
			};
		case 'CLOSE_MOBILE_NAVIGATION':
			console.log('CLOSE_MOBILE_NAVIGATION');

			return {
				...state,
				navigation: {
					...state.navigation,
					sidebar: {
						...state.navigation.sidebar,
						isOpenOnMobile: false,
						// isExpended: false,
						// isLocked: false,
					},
				},
			};

		case 'EXPAND_NAVIGATION_SIDEBAR':
			console.log('EXPAND_NAVIGATION_SIDEBAR');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					sidebar: {
						...state.navigation.sidebar,
						isExpended: true,
					},
				},
			};

		case 'COLLAPSE_NAVIGATION_SIDEBAR':
			console.log('COLLAPSE_NAVIGATION_SIDEBAR');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					sidebar: {
						...state.navigation.sidebar,
						isExpended: false,
					},
				},
			};

		case 'TOGGLE_NAVIGATION_SIDEBAR_LOCK':
			console.log('TOGGLE_NAVIGATION_SIDEBAR_LOCK');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					sidebar: {
						...state.navigation.sidebar,
						isLocked: !state.navigation.sidebar.isLocked,
						// isExpended: !state.navigation.sidebar.isLocked ? true : false,
						isExpended: !state.navigation.sidebar.isLocked ? true : state.navigation.sidebar.isExpended,
					},
				},
			};

		case 'SHOW_ACCOUNT_MENU':
			console.log('SHOW_ACCOUNT_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						account: {
							...state.navigation.topbar.account,
							menu: {
								...state.navigation.topbar.account.menu,
								display: true,
							},
						},
					},
				},
			};

		case 'HIDE_ACCOUNT_MENU':
			console.log('HIDE_ACCOUNT_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						account: {
							...state.navigation.topbar.account,
							menu: {
								...state.navigation.topbar.account.menu,
								display: false,
							},
						},
					},
				},
			};

		case 'TOGGLE_ACCOUNT_MENU':
			console.log('TOGGLE_ACCOUNT_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						account: {
							...state.navigation.topbar.account,
							menu: {
								...state.navigation.topbar.account.menu,
								// display: false,
								display: !state.navigation.topbar.account.menu.display,
							},
						},
					},
				},
			};

		case 'SHOW_SEARCH_MODAL':
			console.log('SHOW_SEARCH_MODAL');
			console.log('payload:', payload);

			return {
				...state,
				modals: {
					search: {
						...state.modals.search,
						display: true,
					},
					editUserName: {
						...state.modals.editUserName,
						display: state.modals.editUserName.display,
					},
				},
			};

		case 'HIDE_SEARCH_MODAL':
			console.log('HIDE_SEARCH_MODAL');
			console.log('payload:', payload);

			return {
				...state,
				modals: {
					search: {
						...state.modals.search,
						display: false,
					},
					editUserName: {
						...state.modals.editUserName,
						display: state.modals.editUserName.display,
					},
				},
			};

		case 'HIDE_USERNAME_MODAL':
			console.log('HIDE_USERNAME_MODAL');
			console.log('payload:', payload);

			return {
				...state,
				modals: {
					search: {
						...state.modals.search,
						display: state.modals.search.display,
					},
					editUserName: {
						...state.modals.editUserName,
						display: false,
					},
				},
			};

		case 'SHOW_USERNAME_MODAL':
			console.log('SHOW_USERNAME_MODAL');
			console.log('payload:', payload);

			return {
				...state,
				modals: {
					search: {
						...state.modals.search,
						display: state.modals.search.display,
					},
					editUserName: {
						...state.modals.editUserName,
						display: true,
					},
				},
			};

		case 'HIDE_NOTIFICATION_MENU':
			console.log('HIDE_NOTIFICATION_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						notifications: {
							...state.navigation.topbar.notifications,
							menu: {
								...state.navigation.topbar.notifications.menu,
								display: false,
							},
						},
					},
				},
			};

		case 'SHOW_NOTIFICATION_MENU':
			console.log('SHOW_NOTIFICATION_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						notifications: {
							...state.navigation.topbar.notifications,
							menu: {
								...state.navigation.topbar.notifications.menu,
								display: true,
							},
						},
					},
				},
			};

		case 'HIDE_HELP_MENU':
			console.log('HIDE_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: false,
							},
						},
					},
				},
			};

		case 'SHOW_HELP_MENU':
			console.log('SHOW_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: true,
							},
						},
					},
				},
			};

		case 'HIDE_HELP_MENU':
			console.log('HIDE_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: false,
							},
						},
					},
				},
			};

		case 'SHOW_HELP_MENU':
			console.log('SHOW_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: true,
							},
						},
					},
				},
			};

		case 'HIDE_HELP_MENU':
			console.log('HIDE_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: false,
							},
						},
					},
				},
			};

		case 'SHOW_HELP_MENU':
			console.log('SHOW_HELP_MENU');
			console.log('payload:', payload);

			return {
				...state,
				navigation: {
					...state.navigation,
					topbar: {
						...state.navigation.topbar,
						help: {
							...state.navigation.topbar.help,
							menu: {
								...state.navigation.topbar.help.menu,
								display: true,
							},
						},
					},
				},
			};

		default:
			// return state;
			throw new Error('Unhandled action');
	}
}

export function InterfaceProvider({ children }) {
	console.log('InterfaceProvider()');

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<InterfaceStateContext.Provider value={state}>
			<InterfaceDispatchContext.Provider value={dispatch}>{children}</InterfaceDispatchContext.Provider>
		</InterfaceStateContext.Provider>
	);
}

export const useInterfaceStateContext = () => useContext(InterfaceStateContext);
export const useInterfaceDispatchContext = () => useContext(InterfaceDispatchContext);
