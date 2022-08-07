import { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

const initialState = {
	rpc: null,
	keycloak: null,
};

// function reducer(state = initialState, action) {
const reducer = (state = initialState, action) => {
	console.log('reducer()', [state, action]);

	const { type, payload } = action;

	console.log('reducer action type', type);
	console.log('reducer action payload', payload);

	return state;
};

export function AppProvider({ children, value }) {
	// console.log('AppProvider()', [value])

	// const data = { ...initialState, ...value };

	const [state, dispatch] = useReducer(reducer, value);

	return (
		<AppStateContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
		</AppStateContext.Provider>
	);
}

export const useAppStateContext = () => useContext(AppStateContext);
export const useAppDispatchContext = () => useContext(AppDispatchContext);
