import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helloworld from './Helloworld';
import Clock from './Testcomponent';
import * as serviceWorker from './serviceWorker';
import Toggle from './Testbutton'
import LoginControl from './Testloginbutton'
import Mailbox from './Testmail'
import Page from './Testhideshow'
import Blog from './Testlist'
import NameForm from './Testform'

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// const element = <Welcome name="Sara" />;
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
{ id: 2, title: 'Installation', content: 'You can install React from npm.' }];
const element = <div>
    <Helloworld />
    <Clock />
    <Toggle />
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    <Page />
    <Blog posts={posts} />
    <NameForm />
</div>




ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
