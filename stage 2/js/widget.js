var xhr = new XMLHttpRequest();
xhr. onreadystatechange = function () {
    if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);   //this line parses the regular string that the web browser grabs from the server and parses it to javascript.
        //When JSON.parse method is complete it returns a Javascript object.
        //the employees variable after the parsing becomes a Javascript object.
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();