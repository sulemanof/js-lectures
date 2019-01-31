import React, { Component } from 'react';
import TableRaw from './TableRaw';

class Table extends Component {
    render() {
        return(
            <table className={`tableData ${this.props.raws.length ? 'visible' : ''}`}>
                <thead>
                    <tr>
                        <td>{'City'}</td>
                        <td>{'Country'}</td>
                        <td>{'t, ℃'}</td>
                        <td>{'t, ℉'}</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.raws.map(raw => <TableRaw data={raw} key={`${raw.name}/${raw.country}`}/>)}
                </tbody>
            </table>
        )
    }
}

export default Table;
