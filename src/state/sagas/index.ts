import { flatten } from 'lodash';
import { SagaMiddleware } from 'redux-saga';
import basketSagas from './basket.saga';

/**
 * List of all sagas
 */
const allSagas = [ basketSagas ];

/**
 * This method will register all sagas on the provided saga middleware
 * @param {SagaMiddleware<T>} middleware
 * @param {ApolloClient} apolloClient
 * @returns {Task[]}
 */
export const registerSagas = <T>(middleware: SagaMiddleware<T>) =>
	flatten(allSagas).map((sagaCreator) => {
		return middleware.run(sagaCreator());
	});
