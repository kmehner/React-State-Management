import React, { Component } from 'react'

export default class ClassRow extends Component {
    render() {
        const student = this.props.students
        return (
            <tr>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.id}</td>
            </tr>
        )
    }
}