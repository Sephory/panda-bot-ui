import type PocketBase from 'pocketbase'
import type { Poll, PollResult } from '$lib/models/polls'

export default class PollsModule {
	private pb: PocketBase

	constructor(pb: PocketBase) {
		this.pb = pb
	}

	async getPoll(pollId: string): Promise<Poll | null> {
		try {
			return await this.pb.collection('polls').getOne<Poll>(pollId)
		} catch (ex) {
			return null
		}
	}

	async getPollResults(pollId: string): Promise<PollResult[]> {
		try {
			return await this.pb.send(`api/polls/${pollId}/poll_results/`, {})
		} catch (ex) {
			return []
		}
	}
}
