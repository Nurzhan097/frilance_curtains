import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">О компании</h3>
          <p className="text-sm text-gray-400">
            Мы специализируемся на продаже и установке качественных штор. Более 10 лет на рынке, более 5000 довольных клиентов.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Полезные ссылки</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">О нас</a></li>
            <li><a href="#" className="hover:text-white">Услуги</a></li>
            <li><a href="#" className="hover:text-white">Каталог</a></li>
            <li><a href="#" className="hover:text-white">Контакты</a></li>
          </ul>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Карта сайта</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Главная</a></li>
            <li><a href="#" className="hover:text-white">Блог</a></li>
            <li><a href="#" className="hover:text-white">Вопросы и ответы</a></li>
            <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>+7 (700) 123-45-67</li>
            <li>info@example.com</li>
            <li>г. Стамбул, ул. Примерная, 12</li>
            <li>Работаем ежедневно с 9:00 до 20:00</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 Название компании. Все права защищены.
      </div>
    </footer>
  )
}
