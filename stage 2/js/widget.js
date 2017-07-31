var xhr = new XMLHttpRequest();
xhr. onreadystatechange = function () {
    if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);   //this line parses the regular string that the web browser grabs from the server and parses it to javascript.
        //When JSON.parse method is complete it returns a Javascript object.
        //the employees variable after the parsing becomes a Javascript object.
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();