<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=d5c35e51c81488b19da7c1f572507a3d&language=pl-PL`
		);

		const movieDetail = await res.json();
		if (res.ok) {
			return {
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	export let movieDetail;
	import { fly } from 'svelte/transition';
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
	</div>
	<p class="overview">{movieDetail.overview}</p>
	<p>
		<span>Data wydania: </span>
		{movieDetail.release_date} <br />
		<span>Budżet:</span>
		{movieDetail.budget === 0 ? 'Brak informacji' : `${movieDetail.budget}$`} <br />
		<span>Ocena: </span>
		{movieDetail.vote_average} <br />
		<span>Długość trwania: </span>
		{movieDetail.runtime} minut
	</p>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
