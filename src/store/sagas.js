import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {  initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList(){
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (error) {
        console.log(error);
    }
    
}

//导出的函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSagas;