const RowFields = (props) => {
    return (
        props.tblData.map((res, index) => {
            return (
                <tr key={index}>
                    <td></td>
                    {Object.values(res).map((val, ind) => {
                        return (
                            <td>
                                <input type="text" value={val} name={ind+1} onChange={(event) => {
                                    props.handleInputValue(index, event);
                                }} />
                            </td>
                        )
                    })}
                </tr>
            )
        })
    )
}

export default RowFields;