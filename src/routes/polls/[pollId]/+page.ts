import api from "$lib/api";
import { writable } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const pollId = params.pollId
	const data = {
		poll: await api.polls.getPoll(pollId),
		results: await api.polls.getPollResults(pollId)
	}

	let intervalId: NodeJS.Timer | null = null

	const { set, subscribe } = writable(data, () => {
		return () => {
			intervalId && clearInterval(intervalId)
		}
	})

	intervalId = setInterval(async () => {
		const results = await api.polls.getPollResults(pollId)
		set({ ...data, results })
	}, 5000)

	return { subscribe }
}
