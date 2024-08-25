import ShortUniqueId from 'short-unique-id'
import { v4 as uuidv4 } from 'uuid'

export const shortId = (number: number = 10) => {
	const { randomUUID } = new ShortUniqueId({ length: number })
	const year = new Date().getFullYear()
	return `${year}${randomUUID()}`
}

export const uuid = () => {
	return uuidv4()
}