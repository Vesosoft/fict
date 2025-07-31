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
