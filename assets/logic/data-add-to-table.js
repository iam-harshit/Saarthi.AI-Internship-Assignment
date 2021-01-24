$("#submitButton").click(function(e){
	var Name = $("#employeeName").val();
    var employeeId = $("#employeeID").val();
    var department = $("#employeeDepartment").val();
    var emailId = $("#employeeEmail").val();
    var doj = $("#employeeDOJ").val();
    var x = $("#employeeEmail").val();
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    
    
    if(Name != ""){
        $("#submitButton").show();
        $("#employeeName").css("border", "1px solid #ececec");
        $("#employeeName-error").hide();
		
    }
    
    if(employeeId != ""){
        $("#submitButton").show();
        $("#employeeID").css("border", "1px solid #ececec");
        $("#employeeID-error").hide();
		
    }
    
    if(department != "Department"){
        $("#submitButton").show();
        $("#employeeDepartment").css("border", "1px solid #ececec");
        $("#employeeDepartment-error").hide();
		
    }
	
	if(emailId != ""){
        $("#submitButton").show();
        $("#employeeEmail").css("border", "1px solid #ececec");
        $("#employeeEmail-error").hide();
		
    }
    
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        $("#submitButton").show();
        $("#employeeEmail").css("border", "1px solid #ececec");
        $("#employeeEmail-error").hide();
		
    }
    
    if(doj != ""){
        $("#submitButton").show();
        $("#employeeDOJ").css("border", "1px solid #ececec");
        $("#employeeDOJ-error").hide();
		
    }
    
    if(Name == ""){
        $("#submitButton").show();
        $("#employeeName").css("border", "1px solid #ff8080");
        $("#employeeName-error").text("Name is required").css("color", "#ff8080").show();
		
    }
    
    else if(employeeId == ""){
        $("#submitButton").show();
        $("#employeeID").css("border", "1px solid #ff8080");
        $("#employeeID-error").text("ID is required").css("color","#ff8080").show();
		
    }
    
    else if(department == "Department"){
        $("#submitButton").show();
        $("#employeeDepartment").css("border", "1px solid #ff8080");
        $("#employeeDepartment-error").text("Department is required").css("color","#ff8080").show();
		
    }
	
	else if(emailId == ""){
        $("#submitButton").show();
        $("#employeeEmail").css("border", "1px solid #ff8080");
        $("#employeeEmail-error").text("Email is required").css("color","#ff8080").show();
		
    }
    
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        $("#submitButton").show();
        $("#employeeEmail").css("border", "1px solid #ff8080");
        $("#employeeEmail-error").text("Enter valid email").css("color", "#ff8080").show();
		
    }
    
    else if(doj == ""){
        $("#submitButton").show();
        $("#employeeDOJ").css("border", "1px solid #ff8080");
        $("#employeeDOJ-error").text("DOJ is required").css("color","#ff8080").show();
		
    }
	
	else{
		
		dataSubmit();
		//close modal
		$("#ModalCenter").modal("hide"); 
	}
   
});
						

function dataSubmit() {
	if ($("#employeeName").val() != null && $("#employeeName").val() != '') {

		dataAddToTable();

		// Clear form fields
		formClear();

		// Focus to employee name field
		$("#employeeName").focus();
	}
}

function dataAddToTable() {
	
	if ($("#employeeTableThead thead").length == 0) {
        $("#employeeTableThead").append(
	    "<thead>" +
		"<tr>" + 
		"<th>" + "" + "</th>" +
		"<th>" + "Name" + "</th>" +
		"<th>" + "Employee ID" + "</th>" +
		"<th>" + "Department" + "</th>" +
		"<th>" + "Email Id" + "</th>" +
		"<th>" + "DOJ" + "</th>" +
		"</tr>" +
		"</thead>"
		);
      }
	
	// Append data to the table
	$("#employeeTableBody tbody").append(
		"<tr>" +
		"<td>" +
		"<button type='button' " +
		"onclick='dataDelete(this);' " +
		"class='btn btn-primary'>" +
		"<i class='fas fa-times' />" +
		"</button>" +
		"</td>" +
		"<td>" + $("#employeeName").val() + "</td>" +
		"<td>" + $("#employeeID").val() + "</td>" +
		"<td>" + $("#employeeDepartment").val() + "</td>" +
		"<td>" + $("#employeeEmail").val() + "</td>" +
		"<td>" + $("#employeeDOJ").val() + "</td>" +
		"</tr>"
	);
}

// Delete data from <table>
function dataDelete(ctl) {
//	if($("#employeeTableBody").length >= 1){
//		document.getElementById("employeeTableThead").deleteTHead();
//		$(ctl).parents("tr").remove();
//	}
//	else{
	$(ctl).parents("tr").remove();
//	}
}


// Clear form fields
function formClear() {
	$("#employeeName").val("");
	$("#employeeID").val("");
	$("#employeeDepartment").val("Department");
	$("#employeeEmail").val("");
	$("#employeeDOJ").val("");
}
