import React, { Component } from 'react';

class Table extends Component {

    render() {
        return (
            <tr key={this.props.id}>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
            </tr>
        )
    }
}
export default Table;