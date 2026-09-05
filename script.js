// script.js
(function() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // Функция фильтрации
  function filterCards(category) {
    cards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === 'all' || cardCategory === category) {
        // Показываем карточку
        card.classList.remove('hidden');
        // Убираем и снова добавляем класс show для перезапуска анимации
        card.classList.remove('show');
        // Форсируем перерисовку
        void card.offsetHeight;
        card.classList.add('show');
      } else {
        // Скрываем карточку
        card.classList.remove('show');
        card.classList.add('hidden');
      }
    });
  }

  // Обработчики кликов по кнопкам
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Убираем активный класс у всех кнопок
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;
      filterCards(filter);
    });
  });

  // При загрузке показываем все (активная кнопка "Все" уже есть)
  // Запускаем фильтр для "all", чтобы анимация сработала при первом открытии
  setTimeout(() => {
    filterCards('game');
  }, 100);
})();