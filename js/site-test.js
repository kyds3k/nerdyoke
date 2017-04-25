$(document).ready(function() {

   $('#search').on('input', function() {
      var searchKeyword = $(this).val();
      if (searchKeyword.length >= 3) {
         $.post('search.php', { keywords: searchKeyword }, function(data) {
         $('#results').empty()
         if (data.length !== 0) {
            $.each(data, function() {
               $('#results').append('<li>' + this.artist + ' - ' + this.song + '</li>');
            });
         } else {
            $('#results').append('<li>No results found.</li>');
         }
         }, "json");
      } else {
         $('#results').empty()
      }
   });

   $('.alphanumerics a').click(function(){
      var searchKeyword = $(this).text();
      $.post('search-alpha.php', { keywords: searchKeyword }, function(data) {
         $('#results').empty()
         $.each(data, function() {
            $('#results').append('<li>' + this.artist + ' - ' + this.song + '</li>');
         });
      }, "json");
   });

});oo