$(document).ready(function() {

   $('#search').on('input', function() {
      var searchKeyword = $(this).val();
      if (searchKeyword.length >= 3) {
         $.post('search.php', { keywords: searchKeyword }, function(data) {
         //$('table tbody').empty()
         $.each(data, function() {
            $('table tbody').append('<tr><td>' + this.artist + '<\/td><td>' + this.song + '</td><\/tr>');
         });
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

});