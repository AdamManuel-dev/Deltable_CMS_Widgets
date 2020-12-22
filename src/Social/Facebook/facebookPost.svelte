<script>
    let facebookPostUrl = "https://www.facebook.com/20531316728/posts/10154009990506729/";

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
  
  <div 
    class="fb-post" 
    data-href={facebookPostUrl} 
    data-width="500"></div>

    