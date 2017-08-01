var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', '/data/rooms.json');
roomRequest.send();

/* Traditional way of passing AJAX without JQUERY
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
            } else {``
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

*/


//New way of passing AJAX With JQuery
$(document).ready(function() {
    var url = "data/employees.json";
    $.getJSON(url, function(response) {                 //This function parses the JSON which is equivalent to JSON.parse
        var statusHTML = '<ul class="bulleted">';
        $.each(response,function(index, employee) {     // This function is equivalent to the for loop of the length of employees
            if(employee.inoffice === true){
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employee.name + '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);

        }); //end get JSON


    }); //end ready


