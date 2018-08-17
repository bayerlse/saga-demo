import { AnyAction } from 'redux';

const basket = (state = [], action: AnyAction) => {
	switch (action.type) {
		case 'DELETE_BASKET':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case 'TOGGLE_TODO':
			return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		default:
			return state;
	}
};

export default basket;
