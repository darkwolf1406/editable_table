import "../assets/stylesheets/editabletable.css";
import { useState } from "react";
import RowFields from "./rowfields";
import exportTable from "./exporttable";

const EditableTable = () => {

    const [colIndex, setColIndex] = useState(5);
    const data = [
        {
            1: "",
            2: "",
            3: "",
            4: "",
            5: ""
        }
    ];
    const [tblData, setTblData] = useState(data);

    function handleInputValue(index, event) {
        const inputs = [...tblData];
        const name = event.target.name;
        const value = event.target.value;
        console.log(index + "::" + inputs[index][name]);
        inputs[index][name] = value;
        setTblData(inputs);
    }

    return (
        <>
            <div className="tblBox">
                <table className="mainTbl">
                    <RowFields tblData={tblData} handleInputValue={handleInputValue}/>
                </table>
            </div>
            <div className="controlsBox">
                <div className="newRow">
                    <input type="button" value="New Row" onClick={() => {
                        var len = Object.keys(tblData[0]).length;
                        var tempObj = {};
                        for(var i = 1; i <= len; i++) {
                            tempObj[i] = "";
                        };
                        tblData.push(tempObj);
                        setTblData([...tblData]);
                    }} />
                </div>

                <div>
                    <input type="button" value="New Column" onClick={() => {
                        let ind = colIndex + 1;
                        setColIndex(ind)
                        tblData.forEach((res) => {
                            res[ind] = "";
                        })
                        setTblData([...tblData]);
                    }} />
                </div>

                <div>
                    <input type="button" value="Export" onClick={() => {
                        exportTable();
                    }} />
                </div>
            </div>

        </>
    )
}

export default EditableTable;