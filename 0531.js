const imageContainer = document.querySelector('.image-container');
const image = imageContainer.querySelector('img');

const originalImagePath = image.src;

const alternateImagePath = '6698.JPG';

imageContainer.addEventListener('mouseenter', () => {
    // 將圖片的 src 屬性設定為另一張圖片的路徑
    image.src = alternateImagePath;
  });

  imageContainer.addEventListener('mouseleave', () => {
    // 將圖片的 src 屬性還原為原始圖片的路徑
    image.src = originalImagePath;
  });
