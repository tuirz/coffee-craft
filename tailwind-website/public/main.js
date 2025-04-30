document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {
        fontFamily: {
          Poppins: ['Poppins', 'sans-serif'],
          'Bebas-Neue': ['Bebas Neue', 'cursive'],
          Pacifico: ['Pacifico', 'cursive'],
        },
      },
    },
    plugins: [],
  };