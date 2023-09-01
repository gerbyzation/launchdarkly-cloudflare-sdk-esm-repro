export default {
    testMatch: ['**/*.test.mjs'],
    testPathIgnorePatterns: ['node_modules', 'dist'],
    modulePathIgnorePatterns: ['dist'],
    moduleFileExtensions: ['mjs', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'miniflare',
    testEnvironmentOptions: {
      // Miniflare doesn't yet support the `main` field in `wrangler.toml` so we
      // need to explicitly tell it where our built worker is. We also need to
      // explicitly mark it as an ES module.
      scriptPath: 'src/index.mjs',
      modules: true,
    },
  };
  