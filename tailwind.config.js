/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('https://i.pinimg.com/736x/72/ed/06/72ed06611cd7ac4d2979e3ed32ac598a.jpg')",
       // 'emp':"url('../src/assets/img/emp.png')"
    },
    },
    colors:{
      'gray':'#111827',
      'sky':'#082f49',
      'cyan':'#083344',
      'green':'#075E54',
      'slate':'#4b5563',
      'g':'#202c33',
      'blue':'#111b21',
      'white':'#ffffff',
      'light':'#2a3942',
      'msg':'#00a884'

      
    }
  },
  plugins: [],
}

