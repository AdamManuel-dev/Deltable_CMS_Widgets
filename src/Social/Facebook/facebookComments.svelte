<script >
    
    let facebookCommentsUrl = "https://www.facebook.com/facebook/Comments s/10153231379946729/";
    let facebookCommentsDisplayCount = "5";
  
  
      window.fbAsyncInit = function() {
  
  
        FB.init({
          xfbml      : true,
          version    : 'v9.0',
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
        });
      }; 
        // Load the SDK Asynchronously
    (function(d){
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all.js";
       ref.parentNode.insertBefore(js, ref);
     }(document));
  </script>
    <!-- We will need user permissions to be able to share the comments within the post and post directly to the application -->
<div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator"  data-numposts={facebookCommentsDisplayCount}></div>