import React, { Component } from 'react';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'harper',
    lastName: 'perez'
};

const element = (
    <h1>
        hello, {formatName(user)}!
    </h1>
);


class Helloworld extends Component {
    render() {
        return element;
    }
}

export default Helloworld;
