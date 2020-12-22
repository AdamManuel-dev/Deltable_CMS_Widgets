<script lang="ts">
  import { onMount } from 'svelte';
  import 'facebook-js-sdk';
  (window as any).fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v9.0',
      status: true, // check login status
      cookie: true, // enable cookies to allow the server to access the session
    });
  };
  // Load the SDK Asynchronously
  (function (d) {
    var js,
      id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = '//connect.facebook.net/en_US/all.js';
    ref.parentNode.insertBefore(js, ref);
  })(document);

  onMount(() => {
    document.getElementById('requestsBtn').onclick = function () {
      FB.ui({ method: 'apprequests', message: 'This is a test message for the requests dialog.' }, function (data) {
        console.log('App Requests Response', data);
      });
    };
  });
</script>

<div id="requestsBtn" class="clearfix btn btn-success">Basic Request Dialog</div>
