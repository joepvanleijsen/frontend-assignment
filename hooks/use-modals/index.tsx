// import { useEffect, useState } from 'react';

// Context
import { useInterfaceStateContext, useInterfaceDispatchContext } from '@contexts/index';

const useModals = () => {
	console.log('useModals()');

	const interfaceState = useInterfaceStateContext();
	console.log('useNavigationMenu interfaceState:', interfaceState);

	const dispatch = useInterfaceDispatchContext();

	const showSearchModal = () => {
		dispatch({
			type: 'SHOW_SEARCH_MODAL',
		});
	};
	const hideSearchModal = () => {
		dispatch({
			type: 'HIDE_SEARCH_MODAL',
		});
	};

	const hideEditUserNameModal = () => {
		dispatch({
			type: 'HIDE_USERNAME_MODAL',
		});
	};

	const showEditUserNameModal = () => {
		dispatch({
			type: 'SHOW_USERNAME_MODAL',
		});
	};

	return {
		isSearchModalVisible: interfaceState.modals.search.display,
		showSearchModal,
		hideSearchModal,
		isEditUserNameModalVisible: interfaceState.modals.editUserName.display,
		hideEditUserNameModal,
		showEditUserNameModal,
	};
};

export default useModals;
