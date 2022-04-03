<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=d5c35e51c81488b19da7c1f572507a3d&language=pl-PL&query=${params.id}&page=1&include_adult=false`
		);

		const data = await res.json();
		if (res.ok) {
			return {
				props: { searchMovie: data.results }
			};
		}
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let searchMovie;
</script>

<div class="searched-movies">
	{#each searchMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
	}
</style>
