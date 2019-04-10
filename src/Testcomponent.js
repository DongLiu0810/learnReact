import React, { Component } from 'react';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello,world</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        //异步请求
        // fetchPosts().then(response => {
        //     this.setState({
        //         posts: response.posts
        //     });
        // });

        // fetchComments().then(response => {
        //     this.setState({
        //         comments: response.comments
        //     });
        // });
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello,world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// export default Welcome;
export default Clock;