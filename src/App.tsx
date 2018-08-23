import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state/store';
import BasketView from './views/basketView.container';
import Header from './components/header/header.presenter';

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<BasketView />
				</div>
			</Provider>
		);
	}
}

export default App;
