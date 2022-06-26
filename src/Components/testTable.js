import { useState } from "react";

function TableRows({ rowsData, handleChange }) {
    return (

        rowsData.map((data, index) => {
            const { fullName, emailAddress, salary } = data;
            return (
                <tr key={index}>
                    <td>
                        <input type="text" value={fullName} onChange={(evnt) => (handleChange(index, evnt))} name="fullName" className="form-control" />
                    </td>
                    <td><input type="text" value={emailAddress} onChange={(evnt) => (handleChange(index, evnt))} name="emailAddress" className="form-control" /> </td>
                    <td><input type="text" value={salary} onChange={(evnt) => (handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                </tr>
            )
        })

    )

}

function AddDeleteTableRows() {
    const [rowsData, setRowsData] = useState([]);

    const addTableRows = () => {

        const rowsInput = {
            fullName: '',
            emailAddress: '',
            salary: ''
        }
        setRowsData([...rowsData, rowsInput])

    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Salary</th>
                    <th><button onClick={addTableRows} >+</button></th>
                </tr>
            </thead>
            <tbody>
                <TableRows rowsData={rowsData} handleChange={handleChange} />
            </tbody>
        </table>
    )
}
export default AddDeleteTableRows