import { applyMiddleware } from 'redux';
import {booking} from './booking';
import {user} from './user';
import {corporate} from './corporate';


export default applyMiddleware(
    booking,
    user,
    corporate
);