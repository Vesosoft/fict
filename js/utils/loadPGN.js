// js/utils/loasPGN.js

// Изчакваме цялата страница да се зареди
window.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('loadFrame');

  if (!iframe) {
    console.error('❌ Iframe с id="loadFrame" не е намерен.');
    return;
  }

  // Когато iframe-ът се зареди
  iframe.addEventListener('load', () => {
    console.log('✅ Зареден е iframe: load.html');

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const loadBtn = iframeDoc.getElementById('loadBtn');

      if (!loadBtn) {
        console.warn('⚠️ Бутон с id="loadBtn" не е намерен във вътрешния документ.');
        return;
      }

      // Добавяме слушател за събитие при клик на бутона
      loadBtn.addEventListener('click', () => {
        console.log('🟢 Натиснат е бутонът "Зареди партията"');

        // Тук извикай твоята логика за зареждане на PGN
        alert('Партидата ще бъде заредена...'); // временно
      });

    } catch (err) {
      console.error('❌ Грешка при достъп до iframe съдържанието:', err);
    }
  });
});
