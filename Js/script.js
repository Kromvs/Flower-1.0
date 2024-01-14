function changeTab(tabId) {
    // Получаем все элементы с классом "map-tab"
    var tabs = document.querySelectorAll('.map-tab');
  
    // Убираем класс "active" у всех табов
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
  
    // Добавляем класс "active" только для выбранного таба
    document.getElementById(tabId).classList.add('active');
  }
  
  
function toggleContent(block) {
  var activeBlock = document.querySelector('.geo-item.active');
  var activeContent = activeBlock.querySelector('.geo-item_content');
  activeContent.style.display = 'none'; // Скрываем активный контент

  var content = block.querySelector('.geo-item_content');
  content.style.display = 'block'; // Показываем выбранный контент

  activeBlock.classList.remove('active'); // Удаляем класс активного блока
  block.classList.add('active'); // Добавляем класс активному блоку
}

  
document.getElementById('mobile-menu').addEventListener('click', function () {
  var burgerButton = document.querySelector('.header-burger');
  var burgerIcons = document.querySelectorAll('.burger-icon');
  
  // Переключаем видимость меню
  var burgerContent = document.querySelector('.burger-content');
  burgerContent.style.display = (burgerContent.style.display === 'block' ? '' : 'block');
  
  // Добавляем или удаляем класс для изменения цвета фона кнопки бургера
  burgerButton.classList.toggle('burger-clicked');
  
  // Переключаем иконки между бургером и крестиком
  burgerIcons.forEach(icon => icon.classList.toggle('cross-icon'));
});