<script>
    import { onMount } from 'svelte';

	
	export let url;
	export let size; 
	
  let qrcode;
		
		// TODO: Update QR Generator Current origin of solution = https://github.com/davidshimjs/qrcodejs/blob/master/qrcode.js
	onMount(() => {

		let script = document.createElement('script');
    script.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    document.head.append(script);
	
		script.onload = () => {

			qrcode = new QRCode("qrcode", {
				text: url,
		  	width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
			});		
			
		};				
	  
	});

</script>

<style lang="postcss" src="./QRCode.postcss">
    div {
    }
  </style>

<div id="qrcode"></div>

