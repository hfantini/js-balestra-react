import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig(
{
	plugins: 
	[
		react(),
		dts
		({
			exclude:["src/app"],
			insertTypesEntry: true,
		})
	],
	build: 
	{
		lib: 
		{
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			name: 'balestra-react',
			formats: ['es', 'umd'],
			fileName: (format) => `balestra-react.${format}.js`,
		},
		rollupOptions: 
		{
			external: 
			[
				'react', 
				'react-dom',
			],
			output: 
			{
				globals: 
				{
					react: 'React',
					'react-dom': 'ReactDOM'
				},
			},
		}
	},  
})
