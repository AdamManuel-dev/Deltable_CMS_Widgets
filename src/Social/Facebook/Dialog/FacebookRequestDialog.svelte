<script lang="ts"
>
import 'facebook-js-sdk';

    document.getElementById('requestsBtn').onclick = function() {
  FB.ui({method: 'apprequests',
      message: 'This is a test message for the requests dialog.'
  }, function(data) {
    console.log('App Requests Response', data);
  });
}

</script>


<div id="requestsBtn" class="btn btn-success clearfix">Basic Request Dialog</div>

