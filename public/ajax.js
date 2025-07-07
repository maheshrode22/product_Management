let searchByCategory = (str) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let jsonObj = JSON.parse(this.responseText);
            let tableBody = document.getElementById("tblbody");
            tableBody.innerHTML = "";

            jsonObj.forEach((element, index) => {
                let row = document.createElement("tr");

                // Serial number
                let col = document.createElement("td");
                col.innerHTML = index + 1;
                row.appendChild(col);

                // Product name
                col = document.createElement("td");
                col.innerHTML = element.name;
                row.appendChild(col);

                // Category
                col = document.createElement("td");
                col.innerHTML = element.category;
                row.appendChild(col);

                // Price
                col = document.createElement("td");
                col.innerHTML = element.price;
                row.appendChild(col);

                // Quantity
                col = document.createElement("td");
                col.innerHTML = element.qty;
                row.appendChild(col);

                // DELETE
                col = document.createElement("td");
                col.innerHTML = `<a href="/delprod?prodid=${element.id}" class="btn btn-danger btn-sm" onclick="return confirmDelete();"><i class="bi bi-trash-fill"></i></a>`;
                row.appendChild(col);



            //     <td>

            //     <a href="/delprod?prodid=<%=prod.id%>" 
            //       class="btn btn-danger btn-sm" 
            //       title="Delete"
            //       onclick="return confirmDelete();">
            //      <i class="bi bi-trash-fill"></i>
            //      Delete
            //    </a>
            //   </td>
            
                // UPDATE
                col = document.createElement("td");
                col.innerHTML = `<a href="/update?deptid=${element.id}&name=${element.name}&category=${element.category}&price=${element.price}&qty=${element.qty}" class="btn btn-warning btn-sm"><i class="bi bi-pencil-square"></i></a>`;
                row.appendChild(col);

                tableBody.appendChild(row);
            });
        }
    };

    xhttp.open("GET", "/searchCatByName?category=" + str, true);
    xhttp.send();
};
