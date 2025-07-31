// js/utils/loasPGN.js
/*export default function loadHTML(url, selector) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Грешка при зареждане на ${url}: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(error => {
      console.error("Грешка при зареждане на HTML:", error);
    });
    }*/
// Вариант с async/await:
export default async function loadHTML(url, selector) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Грешка при зареждане на ${url}: ${response.status}`);
    }
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  } catch (error) {
    console.error("Грешка при зареждане на HTML:", error);
  }
}
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
