<script>
	import autosize from 'autosize';
	import smartquotes from 'smartquotes';
	smartquotes.replacements.push([/ \- /g, '\u2014']); // " - " to em dash

	const placeholder = `Paste any text and it will make your quotes curly - "hello" becomes “hello” and 'world' becomes ‘world’.

Additionally, if there's a dash with a space on both side (like this: " - "), it'll turn into an em dash!
`;
	let input = '';

	function curly() {
		input = smartquotes(input);
	}
</script>

<div class="max-w-screen-lg mx-auto">
	<h1 class="uppercase text-6xl font-anton mb-10 mt-3 text-amber-800">curlier</h1>
	<div class="flex flex-col">
		<textarea
			on:keyup={curly}
			use:autosize
			rows="9"
			{placeholder}
			bind:value={input}
			class="focus:outline-none bg-amber-400 placeholder-neutral-500 p-2"
		/>
	</div>
</div>
