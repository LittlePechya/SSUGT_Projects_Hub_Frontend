// Получаем все элементы с классом "project-gallery__image"
const galleryImages = document.querySelectorAll('.project-gallery__image');

// Создаем элемент для отображения увеличенного изображения
const enlargedImageContainer = document.createElement('div');
enlargedImageContainer.classList.add('enlarged-image-container');
const enlargedImage = document.createElement('img');
enlargedImage.classList.add('enlarged-image');
enlargedImageContainer.appendChild(enlargedImage);

// Функция открытия увеличенного изображения
function openEnlarged(imageSrc) {
  enlargedImage.src = imageSrc;
  document.body.appendChild(enlargedImageContainer);
  document.body.classList.add('no-scroll');
}

// Функция закрытия увеличенного изображения
function closeEnlarged() {
  document.body.removeChild(enlargedImageContainer);
  document.body.classList.remove('no-scroll');
}

// Добавляем обработчики событий для каждого изображения
galleryImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const imageSrc = e.target.src;
    openEnlarged(imageSrc);
  });
});

// Обработчик события для закрытия увеличенного изображения при щелчке на другую область страницы (enlargedImageContainer)
enlargedImageContainer.addEventListener('click', (e) => {
  if (e.target === enlargedImageContainer) {
    closeEnlarged();
  }
});

// Обработчик события для закрытия увеличенного изображения при нажатии клавиши Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeEnlarged();
  }
});