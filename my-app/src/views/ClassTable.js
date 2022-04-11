import React, { Component } from 'react'
import ClassRow from '../components/ClassRow'

export default class ClassTable extends Component {
    render() {
        return (
            <>
                <h1 className='text-center mt-5'>Kekambus Class</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Fist</th>
                            <th>Last</th>
                            <th>#id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.students.map((student, idx) => <ClassRow student={student} key={idx} />)} */}
                    </tbody>
                </table>
            </>
        )
    }
}