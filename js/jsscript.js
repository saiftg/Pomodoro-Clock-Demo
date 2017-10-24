console.log('test')
$(document).ready(function(){
post = [];
// var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="
    var url='https://api.icndb.com/jokes/random?exclude=[explicit]'
    $("#new-chuck-joke").click(function(event){
        event.preventDefault();
        $.getJSON(url, function(result) {
            $("#chuck-joke").html((result.value.joke));
            console.log("new joke", result)
            });
    });
//document.getElementById('quote').innerHTML = quote;

//	$.ajax({
//		type: 'GET',
//		dataType: 'json',
//		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//		success: function(result){
//		console.log(result);
//		}
//	});
    
//        error: function() {
//            $('#error').html('<p>error has occured with AJAX              request</p>');
//        },

//    url: 'https://api.forismatic.com/api/1.0/&callback=?',
//        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//url: 'https://api.icndb.com/jokes/random?exclude=[explicit]'  
    
$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        error: function() {
            $('#error').html('<p>error has occured with AJAX              request</p>');
        },
        success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});

