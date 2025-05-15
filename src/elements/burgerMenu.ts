import { create } from 'zustand'
interface IBurger {
	burger: boolean
	setBurger: () => void
}
const burgerStory = create<IBurger>(set => ({
	burger: false,
	setBurger: () => set(state => ({ burger: !state.burger })),
}))
export default burgerStory
