import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Camera',
      title: 'Классическая фотобудка',
      description: 'Профессиональная фотосъемка с мгновенной печатью фотографий',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Video',
      title: 'GIF-будка',
      description: 'Создание анимированных GIF с забавными эффектами',
      price: 'от 18 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: '360° фотобудка',
      description: 'Невероятные кругозорные видео и фото вашего события',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Smile',
      title: 'Селфи-зеркало',
      description: 'Интерактивное зеркало с эффектами и моментальной печатью',
      price: 'от 20 000 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotobudka-na-svadbu.jpg',
      title: 'Свадьба',
      description: '200+ довольных гостей'
    },
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotobudka-na-korporativ.jpg',
      title: 'Корпоратив',
      description: 'Брендированный дизайн'
    },
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotobudka-na-den-rozhdeniya.jpg',
      title: 'День рождения',
      description: 'Веселье для всех возрастов'
    },
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotobudka-na-vypusknoj.jpg',
      title: 'Выпускной',
      description: 'Яркие воспоминания на всю жизнь'
    },
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotozona-na-meropriyatie.jpg',
      title: 'Фотозона',
      description: 'Стильное оформление'
    },
    {
      image: 'https://instabudka.ru/wp-content/uploads/2019/09/fotobudka-zerkalnaya.jpg',
      title: 'Зеркальная будка',
      description: 'Премиум класс'
    }
  ];

  const faqs = [
    {
      question: 'Как долго длится аренда фотобудки?',
      answer: 'Минимальный срок аренды — 3 часа. Вы можете выбрать любую продолжительность в зависимости от вашего мероприятия.'
    },
    {
      question: 'Входит ли печать фотографий в стоимость?',
      answer: 'Да, печать неограниченного количества фотографий включена в базовую стоимость аренды. Мы используем профессиональные принтеры и качественную фотобумагу.'
    },
    {
      question: 'Можно ли настроить дизайн фотографий?',
      answer: 'Конечно! Мы создадим индивидуальный дизайн рамки для фотографий с вашим логотипом, именами или любыми пожеланиями.'
    },
    {
      question: 'Какая площадь нужна для установки?',
      answer: 'Для классической фотобудки достаточно 2x2 метра. Для 360° будки потребуется около 3x3 метров.'
    },
    {
      question: 'Работаете ли вы в других городах?',
      answer: 'Мы работаем в Москве и Московской области. Для мероприятий в других регионах свяжитесь с нами для обсуждения условий.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            InstaBudka
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Забронировать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Сделай праздник<br />незабываемым! 📸
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Аренда фотобудок для любых мероприятий — свадьбы, корпоративы, дни рождения
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform text-lg px-8">
                <Icon name="Camera" className="mr-2" size={20} />
                Забронировать сейчас
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="animate-float">
              <div className="text-5xl mb-2">🎉</div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Мероприятий</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl mb-2">😊</div>
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-muted-foreground">Счастливых гостей</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-5xl mb-2">⭐</div>
              <div className="text-3xl font-bold text-accent">5.0</div>
              <div className="text-muted-foreground">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4">
            Наши услуги
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите идеальную фотобудку для вашего мероприятия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 hover:border-primary cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4">
            Портфолио
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши работы на реальных мероприятиях
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold text-center mb-4">
            Прозрачные цены
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Никаких скрытых платежей — всё включено
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎈</div>
                <h4 className="text-2xl font-bold mb-2">Базовый</h4>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  15 000 ₽
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>3 часа работы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Неограниченная печать</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Реквизит в подарок</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-105 transition-transform border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-2xl font-bold mb-2">Премиум</h4>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  25 000 ₽
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>5 часов работы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Индивидуальный дизайн</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>GIF + фото</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Электронная галерея</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-2xl font-bold mb-2">VIP</h4>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  40 000 ₽
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>8 часов работы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>360° фотобудка</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Видеооператор</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Премиум реквизит</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Фотокнига в подарок</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-5xl font-bold text-center mb-4">
            Часто задаваемые вопросы
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о наших услугах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white rounded-2xl px-6 border-2 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем мероприятии..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@instabudka.ru</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">InstaBudka</h2>
          <p className="mb-6 opacity-90">Делаем ваши праздники незабываемыми с 2020 года</p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm opacity-75">© 2024 InstaBudka. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}