import PocketBase from 'pocketbase'
import PollsModule from './polls'
import { PUBLIC_PANDA_API } from '$env/static/public'

class PandaApi {
	public polls: PollsModule
	constructor() {
		const pb = new PocketBase(PUBLIC_PANDA_API)
		this.polls = new PollsModule(pb)
	}
}

export default new PandaApi()
