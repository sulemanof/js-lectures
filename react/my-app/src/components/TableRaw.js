import React, { Component } from 'react';

class TableRaw extends Component {
    render() {
        const {
            name,
            country,
            celsium,
            farenheit
        } = this.props.data

        return (
            <tr>
                <td>{name}</td>
                <td>{country}</td>
                <td>{celsium}</td>
                <td>{farenheit}</td>
            </tr>
        )
    }
}

export default TableRaw;
