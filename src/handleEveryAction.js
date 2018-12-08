let handleEveryMap;

export function addHandleEvery(handlers) {
    handleEveryMap = {
        ...handleEveryMap,
        ...handlers,
    }
}

export function* handleEveryAction(action) {
    try {
        const fn = handleEveryMap[action.type];
		if (fn) {
			yield fn(action);
		}
    } catch (e) {
        console.group("Error handling action: ", action.type);
		console.error("error: ", e);
		console.log("action: ", action);
		console.groupEnd();
    }
}
