# 手写Redux

```js
function  createStore(reducer,defaultState) {
	let state = defaultState
	let currentReducer = reducer

	function getState() {
		return state
	}

	function dispatch(action) {
		state = currentReducer(state,action)
		listeners.forEach(fn => {
			fn()
		});
	}

	let listeners = []

	function subscribe(fn) {
		listeners.push(fn)
	}

	function replaceReducer(nextReducer){
		currentReducer = nextReducer
		dispatch({type: Symbol('')})
	}
	
	dispatch({ type: Symbol('') })

	const store = {
		getState,
		dispatch,
		subscribe
	}

	return store
}


function combineReducers(reducers){
	const reducerKeys = Object.keys(reducers)
	return function combination(state={},action) {
		const nextState = {}
		for (let  i = 0;  i < reducerKeys.length;  i++) {
			const key = reducerKeys[ i];
			const reducer = reducers[key]
			const previousState = state[key]
			const nextForKeyState = reducer(previousState, action);
			nextState[key] = nextForKeyState
		}
		return nextState;
	}
}

function  applyMiddleware(...middlewares) {
	return function (createStore) {
		return function (reducer, initState) {
			const store = createStore(reducer, initState);
			const simpleStore = { getState: store.getState };
			const chain = middlewares.map((middleware) => middleware(simpleStore));
			const dispatch = compose(...chain)(store.dispatch);
			return {
				...store,
				dispatch,
			};
		};
	};
}

function  compose(...funcs) {
	return funcs.reduce((a,b)=>(...args)=>a(b(args)))
}


function bindActionCreator(actionCreator, dispatch) {
	return function () {
		return dispatch(actionCreator.apply(this, arguments));
	};
}

export default function bindActionCreators(actionCreators, dispatch) {
	const boundActionCreators = {};
	for (const key in actionCreators) {
		const actionCreator = actionCreators[key];
		if (typeof actionCreator === 'function') {
			boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
		}
	}
	return boundActionCreators;
}

```



