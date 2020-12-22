<!-- https://github.com/gotham64/svelte-pdf -->

<script lang="ts">
    import PdfViewer from 'svelte-pdf';
    let documentUrl = "https://bayes.wustl.edu/etj/articles/random.pdf"
    let scale
    let pageNum
    let flipTime
    let showButtons
    let showBorder

</script>

<PdfViewer url={documentUrl} scale ={scale} pageNum ={pageNum} flipTime = {flipTime} showButtons = {showButtons} showBorder = {showBorder} />