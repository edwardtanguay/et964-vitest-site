import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['./src/tools/**/*.test.ts'],
		globals: true
	},
});