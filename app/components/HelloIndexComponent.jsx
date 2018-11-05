import React from 'react';
import {Link} from 'react-router';

const hStyle = {        
	color: '#9F3F05'
}

class HelloIndexComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 style={hStyle}> <Link to="/createUser">Create</Link></h1>
                <h1 style={hStyle}> <Link to="/getUser">Get</Link></h1>
            </div>
        );
    }
}

export default HelloIndexComponent;