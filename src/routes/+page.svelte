<script lang='ts'>
	import * as DarkMode from '$lib/index.js';
	import MoonToSunny from '~icons/line-md/moon-filled-to-sunny-filled-loop-transition';
	import SunnyToMoon from '~icons/line-md/sunny-filled-loop-to-moon-filled-transition';
</script>

<h1> Svelte Fancy Dark Mode Toggle</h1>

<!-- load the dark mode and set the class to html tag. This is loaded before the page is mounted -->
<!-- you can alose include this component in +layout.svelte -->
<DarkMode.Header themeColors={{ dark: '#000000', light: '#ffffff' }} />

<div class='button-container'>
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each { length: 3 } as _}
		<!-- darkmode toggle button -->
		<!-- set icons or text for the button with snippets -->
		<DarkMode.ToggleButton>
			{#snippet dark()}
				<SunnyToMoon />
			{/snippet}

			{#snippet light()}
				<MoonToSunny />
			{/snippet}
		</DarkMode.ToggleButton>
	{/each}
</div>

Current Mode: {DarkMode.mode.current}

<style>
:global {
  body {
    background-color: light-dark(#efedea, #1a1a1a);
  }

  html{
    color-scheme: light;
  }

  html:is(.dark) {
    color-scheme: dark;
  }
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around
}
</style>
