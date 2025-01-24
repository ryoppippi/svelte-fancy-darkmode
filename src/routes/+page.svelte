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
	{#each { length: 3 } as _ (_)}
		<!-- darkmode toggle button -->
		<!-- set icons or text for the button with snippets -->
		<DarkMode.ToggleButton>
			{#snippet darkIcon()}
				<MoonToSunny />
			{/snippet}

			{#snippet lightIcon()}
				<SunnyToMoon />
			{/snippet}
		</DarkMode.ToggleButton>
	{/each}
</div>

{#if DarkMode.darkMode.current === 'dark'}
	<p>Dark mode is active.</p>
{:else}
	<p>Dark mode is inactive.</p>
{/if}

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
