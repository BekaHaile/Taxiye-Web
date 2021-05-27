import React  from 'react';
import Moment from 'react-moment';

export default function DateView({format, date}) {
    
        return (
            <Moment format={format} withTitle>
                {date}
            </Moment>
        );
    
}