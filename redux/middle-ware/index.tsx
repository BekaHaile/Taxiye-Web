import { applyMiddleware } from 'redux';
import {booking} from './booking';
import {user} from './user';

export default applyMiddleware(
    booking,
    user
);