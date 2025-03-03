
document.querySelector("#formdata").addEventListener("submit", function (event) {
    var inputvalue = document.querySelector("#inputvalue").value;
    var result = document.querySelector("#result");
    
    if (inputvalue.trim() === "") {
        alert("Please enter a valid name!");
        return;
    }
    var myLi = document.createElement("li");
    
    myLi.innerHTML = inputvalue;
    result.append(myLi);
    
    document.querySelector("#inputvalue").value = "";
    
    event.preventDefault();
});
