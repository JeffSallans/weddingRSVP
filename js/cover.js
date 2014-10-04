$(function () {

	function GetURLParameter(sParam)
	{
	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++) 
	    {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam) 
	        {
	            return sParameterName[1];
	        }
	    }
	}​

	$(".toggle-yes").click(function() {

		$(".selectedYes").show()
	});

	$(".toggle-no").click(function() {

		$(".selectedYes").hide()
	});

	function parseUrlParam() {

		$(".nameOfParty").val(GetURLParameter("name"));

		var numberOfPossibleAttendees = GetURLParameter("number");

		
	}();
});