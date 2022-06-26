function exportTable() {
    var export_data = [];
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var exportrow = [];
        for (var j = 0; j < cols.length; j++) {

            if(cols[j].children.length > 0) {
                exportrow.push(cols[j].firstChild.value);
            } else {
                exportrow.push(cols[j].innerHTML);
            }
        }
        export_data.push(exportrow.join(","));
    }
    export_data = export_data.join('\n');
    exportFile(export_data);
}

function exportFile(export_data) {
    var csv_file = new Blob([export_data], {
        type: "text/csv"
    });
    var temp_link = document.createElement('a');
    temp_link.download = "GfG.csv";
    var url = window.URL.createObjectURL(csv_file);
    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    temp_link.click();
    document.body.removeChild(temp_link);
}

export default exportTable;