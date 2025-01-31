<script lang="ts">
	import { SITES } from '$lib/data';
</script>

<main class="mx-auto grid max-w-3xl gap-6">
	<section>
		<p class="text-pretty">
			Welcome to the official webring of students at the <a
				href="http://www.nits.ac.in/"
				target="_blank">National Institute of Technology, Silchar</a
			>. This is an ongoing project to document our student body, all while making them more visible
			to the public. If you're one of us, we welcome you with open
			<a href="https://git.new/nitsring" target="_blank">PRs</a>).
		</p>
	</section>
	<section class="place-items-center">
		<table class="border border-zinc-200">
			<thead>
				<tr class="bg-zinc-800">
					<th class="text-left">Name</th>
					<th class="text-right">Department</th>
					<th class="text-right">Year</th>
					<th class="text-right">URL</th>
				</tr>
			</thead>
			<tbody>
				{#each SITES as site (site.url)}
					<tr class="border border-zinc-200">
						<td class="text-left">{site.name}</td>
						<td class="text-right">{site.department}</td>
						<td class="text-right">{site.year}</td>
						<td class="text-right">
							<a href={site.url} target="_blank">{new URL(site.url).hostname}</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</main>

<style>
	td {
		@apply px-2 py-1;
	}
	th {
		@apply px-4 py-1;
	}
	a {
		@apply underline underline-offset-4;
	}
</style>
