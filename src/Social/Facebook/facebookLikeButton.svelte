<!-- Facebook Like Button Standards -->
<!-- https://developers.facebook.com/docs/plugins/like-button -->
<script >
import { dataset_dev } from "svelte/internal";



    let likeUrl = "https://developers.facebook.com/docs/plugins/";
    let dataShare = "true"
    let dataSize = "small"
    let dataAction = "Like"
    let dataLayout = "standard"
    let dataWidth = ""
    let dataColorScheme ="dark"

  
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

<div class="fb-like" data-colorscheme ={dataColorScheme} data-href={likeUrl} data-width={dataWidth} data-layout={dataLayout} 
data-action={dataAction} data-size={dataSize} data-share={dataShare}>
</div>