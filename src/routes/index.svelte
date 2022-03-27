<script>
	import autosize from 'autosize';
	import smartquotes from 'smartquotes';

  const placeholder = `Paste any text and it will make your quotes curly. "hello" becomes “hello” and 'world' becomes ‘world’.

Additionally, if there's a dash with a space on both side (like this: " - "), it'll turn into an em dash!
`
  let input = ''
</script>

<div class="p-3 text-xl font-serif">
  <h1 class="uppercase text-6xl font-anton">curlier</h1>
  <div class="flex flex-col">
    <textarea use:autosize rows="15" placeholder="{placeholder}" bind:value={input} class="bg-blue-50 focus:outline-none" />
    <p class="bg-red-50 whitespace-pre-wrap">{smartquotes(input)}</p>
  </div>
</div>
