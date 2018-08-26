import { AnyAction } from 'redux';
import { takeEvery, ForkEffect } from 'redux-saga/effects';

/* In the following lines you find types which aim to be a basic
 * of what we defined as a "saga"
 */

export type SagaReturnType = Iterator<{}>;
export type Saga = (...args: AnyAction[]) => SagaReturnType;
export type ActionType = AnyAction['type'];
export type SagaCreator = () => Saga;
export type SagaTakeOptionType = (actionType: ActionType, saga: Saga) => ForkEffect;

/**
 * Creates a saga registrator, so that we do not need to duplicate the code so often
 * The take option defaults to takeEvery
 * @param {SagaCreator} sagaCreator
 * @param {ActionType} actionType
 * @param {SagaTakeOptionType} sagaTakeOption
 * @returns {(apolloClient: ApolloClient) => () => SagaReturnType}
 */
export const createSagaRegistration = (
	sagaCreator: SagaCreator,
	actionType: ActionType,
	sagaTakeOption: SagaTakeOptionType = takeEvery
) => (): Saga =>
	function*(): SagaReturnType {
		yield sagaTakeOption(actionType, sagaCreator());
	};
