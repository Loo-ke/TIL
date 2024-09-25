/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Expo 앱의 모든 파일
    "./screens/**/*.{js,jsx,ts,tsx}" // 스크린 폴더의 모든 파일
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
