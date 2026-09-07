// --- ВАШ ТЕКУЩИЙ КОД (Фильтрация и модальное окно) ---
const filters = [...document.querySelectorAll('.filter')],
      cases = [...document.querySelectorAll('.case')];

filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cases.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.type !== f));
}));

const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const text = document.getElementById('modal-text');

cases.forEach(c => c.addEventListener('click', () => {
  title.textContent = c.dataset.title;
  text.textContent = c.dataset.text;
  modal.classList.add('open');
}));

modal.addEventListener('click', e => {
  if (e.target === modal || e.target.closest('.close')) modal.classList.remove('open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal.classList.remove('open');
});


// --- КОД ЭФФЕКТА ПОСТЕПЕННОГО НАБОРА ТЕКСТА (БЫСТРАЯ ЖИВАЯ ПЕЧАТЬ) ---
const textToType = "Разработка цифровых продуктов для бизнеса и не только";
const typingElement = document.getElementById("typing-effect");
let index = 0;

function typeWriter() {
  if (typingElement) {
    if (index < textToType.length) {
      typingElement.textContent += textToType.charAt(index);
      index++;

      // Ускоренный диапазон: случайная задержка от 30 до 100 миллисекунд
      const randomSpeed = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

      // Небольшая микро-пауза на пробелах тоже уменьшена до 70мс
      const lastChar = textToType.charAt(index - 1);
      const isPunctuation = lastChar === ' ' || lastChar === ',';
      const finalDelay = isPunctuation ? randomSpeed + 70 : randomSpeed;

      setTimeout(typeWriter, finalDelay); 
    } else {
      // Текст полностью набран — включаем мигание курсора
      typingElement.classList.add('blink');
    }
  }
}

// Запускаем печать букв, когда страница полностью загрузилась
document.addEventListener("DOMContentLoaded", typeWriter);
