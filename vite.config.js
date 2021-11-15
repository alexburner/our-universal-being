import checker from 'vite-plugin-checker'

export default {
  plugins: [
    checker({
      overlay: false,
      typescript: true,
      eslint: { files: ['./src'], extensions: ['.ts'] },
    }),
  ],
}
