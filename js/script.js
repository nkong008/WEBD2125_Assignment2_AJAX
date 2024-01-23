
// // EXAMPLE OF SYNCHRONOUS REQUEST--------->
// // creating new variable for object
// var request = new XMLHttpRequest();

// // next create the request to the XHR object
// // the open function requires three parameters 
// // First method, which is going to be either GET or POST, then location of the data file, then a Boolean that specifies whether we want the request to be asynchronous or not.

// // use XMLhttpRequest object to make calls and request data from your server by opening a connection and then sending data.

// request.open('GET', '../data.txt', false);
// request.send();
// if (request.status==200) {
//     console.log(request);

//     document.writeln(request.responseText);
// }

// // END of example ---------------------------------------------->

// // EXMAPLE OF ASYNCHRONOUS REQUEST--------->

// // The browsers AJAX API maintains a property called readyState that has a number indicating how far along the request has progressed. If value is 0, the request has not been sent yet. Once it reaches 4, operation has been completed. 

// var request = new XMLHttpRequest();
// request.open('GET', '../data.txt');
// request.onreadystatechange = function() {

//     // checks for readyState value as well 
//     if ((request.readyState===4) && (request.status===200)) {
//         console.log(request);
//         document.writeln(request.responseText);
//     }
// }

// request.send();

// // This sends a request to the server and then waits for that request to come back at some point.

// // END of example ---------------------------------------------->

// // EXAMPLE OF SCRIPTING FOR BACKWARDS COMPATIBILITY--------->
// // All we have to do to support other browsers is to check if the browsers API has an XHR object.

// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }   else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// request.open('GET', '../data.txt');
// request.onreadystatechange = function() {

//     // checks for readyState value as well 
//     if ((request.readyState===4) && (request.status===200)) {
//         console.log(request);
//         document.writeln(request.responseText);
//     }
// }

// request.send();

// // END of example ------------------------------------------>

// // EXAMPLE OF UPDATING DOM WITH getElementById--------->
// // When working with AJAX its because you want to change something in the DOM. 
// // Easiest way to make a change is througha JavaScript method called getElementById

// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }   else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// request.open('GET', '../data.txt');
// request.onreadystatechange = function() {

//     // checks for readyState value as well 
//     if ((request.readyState===4) && (request.status===200)) {
//         var modify = document.getElementById('update');
//         modify.innerHTML = request.responseText;
//     }
// }

// request.send();
// // getElementById combined with innerHTML gives you very quick updates to your DOM as long as it has an ID

// // END of example ------------------------------------------>

// //EXAMPLE OF MODIFYING ELEMENTS WITH getElementByTagName--------->
// // accessing group elements

// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }   else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// request.open('GET', '../data.txt');
// request.onreadystatechange = function() {

//     // checks for readyState value as well 
//     if ((request.readyState===4) && (request.status===200)) {
//         // by doing this we place an array of elements into the modify variable.
//         var modify = document.getElementsByTagName('li');
//         // now that we have the array we can access an individual element of that array by putting in the index of element. By doing this the third element in this list has been updated with the content data file. 

//         // modify[2].innerHTML = request.responseText;

//         // creating a loop (used to update all elements in our list items from a external doc)
//         // when creating a loop that loop is going from 0 to the modify variable length 

//         for (var i = 0; i < modify.length; i++) {
//             modify[i].innerHTML = 
//             request.responseText;
//         }

//         // so this looks for all the elements in your page that have the TagName of list item, and place all that into a modify variable , then cycle through each variable, changing the HTML of each to responseText from the request. 

//         // in conclusion getElementByTagName is handy for cycling through series of DOM elements. 
//     }
// }

// request.send();

// END of example ------------------------------------------>

// EXAMPLE OF PARSING XML USING AJAX------->


// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }   else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// request.open('GET', '../data.xml');
// request.onreadystatechange = function() {

//     if ((request.readyState===4) && (request.status===200)) {
//         console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue);

//         var items =
//         request.responseXML.getElementsByTagName('name');

//         var output = '<ul>';
//         for (var i = 0; i < items.length; i++) {
//             output += '<li>' + items[i].firstChild.nodeValue + '</li>';
//         }
//         output += '</ul>';

//         document.getElementById('update').innerHTML = output;
        
//     }
// }

// request.send();

// END of example ------------------------------------------>

// EXAMPLE OF READING JSON FILES------->

// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// }   else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// request.open('GET', '../data.json');
// request.onreadystatechange = function() {

//     if ((request.readyState===4) && (request.status===200)) {
//         var items = JSON.parse(request.responseText);
//         // console.log(items);

//         var output = '<ul>';
//             for (var key in items) {
//                 output += '<li>' + items[key].name + '</li>'
//             }
//         output += '</ul>';

//         document.getElementById('update').innerHTML = output;

//     }
// }

// request.send();


// END of example ------------------------------------------>
// EXAMPLE OF jQuery and AJAX------->

// $('#update').load('../data.txt');
// $('#update').load('../data.xml');

// END of example ------------------------------------------>

// EXAMPLE OF READING DATA------->

// $.getJSON('data.json', function(data) {
//     // console.log(data);

//     var output = '<ul>';
//         $.each(data, function(key, val) {
//             output += '<li>' + val.name + '</li>';
//         });
//     output +='</ul>';

//     // target HTML
//     $('#update').append(output);
// });

// END of example ------------------------------------------>

// EXAMPLE OF LIVE SEARCH------->

$('#search').keyup(function name () {
    var searchField = $('#search').val();
    // console.log(searchField);
    var myExp = new RegExp(searchField, "i");

    $.getJSON('data.json', function(data) {

        // console.log(data);
    
        var output = '<ul class="searchresults">';
        
            $.each(data, function(key, val) {

                if ((val.name.search(myExp) != -1) ||
                (val.bio.search(myExp) != -1)
                ) 

                {

                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="../images/'+ val.name +'.jpg" alt="'+ val.
                name +'" />';
                output += '<h4>'+ val.location +'</h4>';
                output += '<p>'+ val.bio +'</p>';
                output += '</li>';
                    
                }
            });
    
        output += '</ul>';
        $('#update').html(output);
    
    });//get json

});

