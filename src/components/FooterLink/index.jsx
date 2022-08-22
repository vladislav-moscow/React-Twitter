import './FooterLink.scss';
import {Link} from 'react-router-dom';
function FooterLink() {
  const footerTitleElem = ['О нас', 'Справочный центр', 'Условия предоставления услуг', 'Политика конфиденциальности',
    'Политика в отношении файлов cookie', 'Специальные возможности', 'Информация о рекламе', 'Блог', 'Статус',
    'Работа', 'Ресурсы бренда', 'Реклама', 'Маркетинг', 'Твиттер для бизнеса', 'Разработчикам', 'Каталог', 'Настройки'
  ];
  const listItem = footerTitleElem.map((item) =>  <Link to='!#' className="sign__footer-link"> { item } </Link> )
  return (
    listItem
  );
}

export default FooterLink;