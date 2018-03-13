import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import 'bootstrap/dist/css/bootstrap.css';
import Table from '../components/Table';

class TodoApp extends Component {
    componentDidMount() {
        this.props.fetchPostsWithRedux();
    }

    render() {
        const posts = this.props.posts &&
            this.props.posts.map((post) => {
                return <Table key={post.id} id={post.id} name={post.name} username={post.username} email={post.email} />
            })
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.todoReducers.posts
    }
}

export const fetchPostsWithRedux = () => {
    return (dispatch) => {
        dispatch(action.fetchPostsRequest());
        return fetchPosts().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(action.fetchPostsSuccess(json))
            }
            else {
                dispatch(action.fetchPostsError())
            }
        })
    }
}

export const fetchPosts = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    return fetch(URL, { method: 'GET' })
        .then(response => Promise.all([response, response.json()]));
}

export default TodoApp = connect(mapStateToProps, { fetchPostsWithRedux })(TodoApp);