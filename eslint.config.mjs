import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import stylistic from '@stylistic/eslint-plugin'

const eslintConfig = defineConfig([
    ...nextVitals,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            'indent': ['error', 2],
            '@stylistic/indent': ['error', 2],
            // ...
        },
    }

])

export default eslintConfig