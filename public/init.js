// $(document).ready(function(){
// 	$('#shortform').submit(function(e){
// 		e.preventDefault();
// 		var u =$('#url').val();
//         var k =$('#customkey').val();
//          $.ajax({
//          	type: "POST", url: "/short", data : { url : u,customkey : k},
//          }); 
// 	});
// });
$(document).ready(function(){
	$('#shortform').submit(function(e){
		e.preventDefault();
		var u = $('#url').val();
		var k = $('#key').val();
		console.log("url: "+u+"\nkey: "+k);
			$.ajax({
				type: "POST",
				url: "/short",
				data: { url: u,key: k},
				success: function(data)
				{
					console.log('key: '+data);
					if(data){
						$('#result').html('<div class="alert alert-Success" role="alert">You have successfully created your short url, Here is your short url:<br><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"><i class="fas fa-link"></i></div></div><input type="text" class="form-control" value=https://shortmee.herokuapp.com/'+data+' readonly></div></div>');
					}
					else{
						$('#result').html('<div class="alert alert-danger" role="alert">Some error Occured !</div>');
					}
				},
				error: function(data)
				{
					console.log('Custom URL Generate Request Failed! :(');				
				}
			});
	});
});