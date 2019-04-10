import React from 'react';
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
// const element = <ul>{listItems}</ul>
//上方代码重构成组件
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number, index) =>
//         <li key={index}>{number}</li>
//     );
//     return (<ul>{listItems}</ul>)
// }


// function ListItem(props) {
//     return <li>{props.value}</li>;
// }
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <ListItem key={number.toString()} value={number} />
//     )
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>)}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}
export default Blog;