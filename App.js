// React imports
import React from 'react';

// Navigation imports
import Navigation from './src/components/Navigation';

// Styles imports
import { colors } from './src/styles/themes/variables';

// Hooks imports
import { StateProvider } from './src/hooks/state';

const App = () => {
	// Define default states here
	const initialState = {
		isLogged: false,
		showSnack: false,
		snackContent: {
			style: { backgroundColor: 'green' },
			theme: { colors: { accent: 'white' } }
		},
		currentScreen: 'viewAccount'
	};

	// Define how states would be updated by some actions
	const reducer = (state, action) => {
		switch (action.type) {
		case 'isLogged':
			return ({
				...state,
				isLogged: action.status
			});
		case 'switchScreen':
			return({
				...state,
				currentScreen: action.screen
			});
		case 'showSnackbar':
			return({
				...state,
				showSnack: action.snack
			});
		case 'snackContent':
			return({
				...state,
				setSnack: action.snackContent
			})
		default:
			return state;
		}
	};

	// Wrap the App inside the state Context
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<Navigation style={{backgroundColor: colors.SKY}}/>
		</StateProvider>
	);
}

export default App;
