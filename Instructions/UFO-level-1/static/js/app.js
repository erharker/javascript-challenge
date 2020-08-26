// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// UFO table
function ufotable(uforeport) {
    d3.select("tbody").text("table-area");
    uforeport.forEach(function (record) {
        // console.log(uforeport);
        var row = tbody.append("tr");
        Object.entries(record).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
ufotable(tableData);

// button to filter by date
var button = d3.select("#filter-btn");
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    d3.select("tbody").selectAll("tr").remove();
    var filteredData = data.filter(data => data.datetime === inputValue);
    // console.log(filteredData)
    ufotable(filteredData);
};
