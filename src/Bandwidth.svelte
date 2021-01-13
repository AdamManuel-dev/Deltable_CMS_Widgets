<script>
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Basic MzMyMGJiMWFmOGFiY2JkYWI2YzljNjcxNmU0Nzc5YjlkYjFlYWM5YjdmYWVjZDI2OmIyNDNjZTFhZThlNDZjNjEzNmIzMDM4OTNkZjE4NWU0MWRmNWU5N2YwZGJkMGRkMw=='
  );
  let to = '2812039264';
  var raw = JSON.stringify({
    to: [to],
    from: '8304440844',
    text:
      'sending a test message too see how many characters I can have in this and tthis is. going to be. a test lslssssfsdfs s sdf dfsd df df dfs sdf sdf sdf sdf sd8989',
    applicationId: '2fa9f771-dc81-497a-a092-bacb5b768989',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  function tellerLoaded() {
    console.log('triggered');
    // fetch('https://messaging.bandwidth.com/api/v2/users/5006996/messages', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
  }
</script>

<form class="flex w-full max-w-sm space-x-3">
  <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
    <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">Send Test Text</div>
    <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
      <div class="col-span-2 lg:col-span-1">
        <div class="relative ">
          <input
            type="text"
            class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder=" Campaign Name"
          />
        </div>
      </div>
      <div class="col-span-2 lg:col-span-1">
        <div class="relative ">
          <input
            type="text"
            class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Phone"
          />
        </div>
      </div>
      <div class="col-span-2">
        <label class="text-gray-700" for="name">
          <textarea
            class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="comment"
            placeholder="Enter your Message"
            name="comment"
            rows="5"
            cols="40"
          />
        </label>
      </div>
      <div class="col-span-2 text-right">
        <button
          on:submit={tellerLoaded}
          type="submit"
          class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Send
        </button>
      </div>
    </div>
  </div>
</form>
