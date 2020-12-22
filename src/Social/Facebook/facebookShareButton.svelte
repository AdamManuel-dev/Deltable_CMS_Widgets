<!-- https://developers.facebook.com/docs/plugins/share-button -->
<script>
    let shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse";
    let dataLayout = "button_count" //standard (default), button_count, button or box_count
    let dataSize = "small"

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
    //  To replace the language change en_Us
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
</script>
  
<div class="fb-share-button" data-href={shareUrl} data-layout={dataLayout} data-size={dataSize}>
    <a target="_blank" href={shareUrl} class="fb-xfbml-parse-ignore">
        Share
    </a>
</div>

    