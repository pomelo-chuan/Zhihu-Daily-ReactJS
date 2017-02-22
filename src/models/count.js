
export default {
    namespace: 'count',
    state: {
        num: 0,
    },
    reducers: {
        add(state) {
            const item = state.num + 1
            return { num: item }
        },
        minus(state) {
            const item = state.num - 1
            return { num: item }
        }
    },
    effects: {
        *addLate({}, { put, call }) {
            // const result = yield call()
            yield put({ type: 'add' })
        },
    }

};
