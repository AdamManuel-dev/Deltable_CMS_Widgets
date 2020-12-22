<script >
  // let FB: any;
  let facebookVideoTitle = "Deltable Editing Videos";
  let facebookVideoUrl = "https://www.facebook.com/facebook/videos/10153231379946729/";
  let facebookVideoUser = "Deltable";
  let facebookVideoWidth = "800";
  let facebookVideoDatePosted = "Friday, December 21, 2020";
  let facebookVideoSettingFullScreen = "false";
  let facebookVideoSettingAutoPlay = "false";


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
  
<div class="fb-video" data-href={facebookVideoUrl} data-autoplay={facebookVideoSettingAutoPlay} 
data-allowfullscreen={facebookVideoSettingFullScreen} data-width={facebookVideoWidth} data-show-text="false">
  <blockquote cite={facebookVideoUrl} class="fb-xfbml-parse-ignore">
    <a href={facebookVideoUrl}>{facebookVideoTitle}</a>
    <p>{facebookVideoTitle}</p>Posted by 
    <a href="https://www.facebook.com/facebookapp/">{facebookVideoUser}</a> 
    on {facebookVideoDatePosted}</blockquote>
  </div>