import type { Record } from "pocketbase"

export interface Poll extends Record {
	user_id: string
	name: string
	prompt: string
	is_open: boolean
	is_active: boolean
}

export interface PollResult {
	poll_option_id: string
	poll_option_text: string
	votes: number
}
