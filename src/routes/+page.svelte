<script lang='ts'>
	import * as DarkMode from '$lib/index.js';
	import MoonToSunny from '~icons/line-md/moon-filled-to-sunny-filled-loop-transition';
	import SunnyToMoon from '~icons/line-md/sunny-filled-loop-to-moon-filled-transition';
</script>

<h1> Svelte Fancy Dark Mode Toggle</h1>

<DarkMode.Header
	darkThemeColor='#000000'
	lightThemeColor='#ffffff'
/>

<div class='button-container'>
	{#each { length: 3 } as _ (_)}
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
