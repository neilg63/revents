import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import modalsReducer from '../../features/modals/modalsReducer'
import authReducer from '../../features/auth/authReducer'
import {firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'react-redux-firestore'
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer
})

export default rootReducer