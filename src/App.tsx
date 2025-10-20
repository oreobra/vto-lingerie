import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { 
  Scissors, 
  Clock, 
  Sparkles, 
  Repeat, 
  Users, 
  Mail, 
  MessageCircle,
  Check,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroImage from 'figma:asset/f9dc7b5fd08fbaf9924a08ff8b8c8c2d10b396ad.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const cases = [
    {
      id: 1,
      modelName: "София Чен",
      productName: "Кружевной бралетт",
      notes: "Сохранены детали кружева • Точная передача цвета",
      beforeImage: "/src/assets/2.png",
      afterImage: "/src/assets/photo_2025-10-20 12.58.58.jpeg"
    },
    {
      id: 2,
      modelName: "Амара Уильямс",
      productName: "Шелковая сорочка",
      notes: "Естественная драпировка • Идеальная посадка",
      beforeImage: "https://images.unsplash.com/photo-1623609163915-d21853ad7d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbm5lcXVpbiUyMGxpbmdlcmllfGVufDF8fHx8MTc2MDk1NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1717765697681-5a160db970d5?w=800"
    },
    {
      id: 3,
      modelName: "Елена Родригес",
      productName: "Боди с вышивкой",
      notes: "Сохранение деталей • Гармония с тоном кожи",
      beforeImage: "https://images.unsplash.com/photo-1623609163915-d21853ad7d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbm5lcXVpbiUyMGxpbmdlcmllfGVufDF8fHx8MTc2MDk1NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1725609959342-c247e04978e5?w=800"
    },
    {
      id: 4,
      modelName: "Майя Патель",
      productName: "Балконет",
      notes: "Точность швов • Естественная посадка пояса",
      beforeImage: "https://images.unsplash.com/photo-1623609163915-d21853ad7d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbm5lcXVpbiUyMGxpbmdlcmllfGVufDF8fHx8MTc2MDk1NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1598343672916-de13ab0636ed?w=800"
    }
  ];

  const models = [
    {
      name: "София Чен",
      description: "Спортивная • 175 см",
      image: "https://images.unsplash.com/photo-1725892604041-fe689d020149?w=600"
    },
    {
      name: "Амара Уильямс",
      description: "Пышные формы • 170 см",
      image: "https://images.unsplash.com/photo-1717765697681-5a160db970d5?w=600"
    },
    {
      name: "Елена Родригес",
      description: "Миниатюрная • 165 см",
      image: "https://images.unsplash.com/photo-1725609959342-c247e04978e5?w=600"
    },
    {
      name: "Майя Патель",
      description: "Статная • 180 см",
      image: "https://images.unsplash.com/photo-1598343672916-de13ab0636ed?w=600"
    }
  ];

  const benefits = [
    { icon: Scissors, text: "Экономия 70%" },
    { icon: Clock, text: "Доставка за 24–72 часа" },
    { icon: Sparkles, text: "Фотореалистичное качество" },
    { icon: Repeat, text: "Многоразовый процесс" },
    { icon: Users, text: "Библиотека моделей" }
  ];

  const pricingOptions = [
    {
      type: "per-image",
      name: "За изображение",
      subtitle: "Платите только за результат",
      formats: [
        { name: "Базовый", price: "от $15", desc: "Белый фон • Естественный свет" },
        { name: "Стандарт", price: "от $25", desc: "Цветной фон • Студийный свет" },
        { name: "Премиум", price: "от $40", desc: "Брендированный стиль • Профессиональная обработка" }
      ]
    },
    {
      type: "subscription",
      name: "Подписка",
      subtitle: "Экономия до 40%",
      plans: [
        { name: "Стартовый", price: "$299/месяц", images: "30 изображений", formats: "Базовый + Стандарт" },
        { name: "Профессиональный", price: "$799/месяц", images: "120 изображений", formats: "Все форматы", popular: true },
        { name: "Корпоративный", price: "По запросу", images: "Неограниченно", formats: "Все форматы + приоритет" }
      ]
    }
  ];

  const priceFactors = [
    { title: "Фон", items: ["Белый фон", "Цветной фон", "Студийный фон", "Индивидуальный фон"] },
    { title: "Освещение", items: ["Естественный свет", "Студийный свет", "Профессиональная постановка света"] },
    { title: "Обработка", items: ["Базовая ретушь", "Профессиональная ретушь", "Цветокоррекция по бренд-буку"] },
    { title: "Дополнительно", items: ["Стиль бренда", "Множественные позы", "Особые требования"] }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4F3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4F3]/95 backdrop-blur-md border-b border-[#1E1E1E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-[#1E1E1E] tracking-tight">
              VTO Lingerie
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('cases')} className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors">
                Примеры
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors">
                Как это работает
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors">
                Контакты
              </button>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#E7C8C4] hover:bg-[#E7C8C4]/90 text-[#1E1E1E]"
            >
              Отправить фото товаров
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src={heroImage}
            alt="Model in lingerie"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl text-[#1E1E1E] mb-6"
            >
              Виртуальная примерка белья
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl text-[#1E1E1E]/70 mb-10 max-w-3xl mx-auto"
            >
              Визуалы профессионального качества за 24–72 часа. Студия не требуется.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#1E1E1E] hover:bg-[#1E1E1E]/90 text-white px-8 py-6 text-lg"
              >
                Отправить фото товаров
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('cases')}
                variant="outline"
                className="border-[#1E1E1E]/20 hover:bg-[#1E1E1E]/5 text-[#1E1E1E] px-8 py-6 text-lg"
              >
                Смотреть примеры
              </Button>
            </motion.div>

            {/* Trust Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-[#1E1E1E]/10"
            >
              <p className="text-sm text-[#1E1E1E]/50 mb-6">«По средам мы носим розовое. В остальные — то, что сидит лучше всего.»</p>
              <div className="flex items-center justify-center gap-12 opacity-40">
                <div className="text-[#1E1E1E]/60 tracking-wider">MEAN GIRLS</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-4">
              До и после
            </h2>
            <p className="text-lg text-[#1E1E1E]/60 max-w-2xl mx-auto">
              Смотрите результаты
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-[#1E1E1E]/10 bg-white">
                  <div className="aspect-[3/4]">
                    <BeforeAfterSlider 
                      beforeImage={caseItem.beforeImage}
                      afterImage={caseItem.afterImage}
                      beforeAlt={`${caseItem.modelName} before`}
                      afterAlt={`${caseItem.modelName} after`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-[#1E1E1E] mb-1">{caseItem.modelName}</h3>
                        <p className="text-sm text-[#1E1E1E]/60">{caseItem.productName}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#1E1E1E]/70 leading-relaxed">
                      {caseItem.notes}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              onClick={() => scrollToSection('gallery')}
              variant="outline"
              className="border-[#1E1E1E]/20 hover:bg-[#1E1E1E]/5 text-[#1E1E1E]"
            >
              Посмотреть еще
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-[#F7F4F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-4">
              Как это работает
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E7C8C4] text-[#1E1E1E] flex items-center justify-center mx-auto mb-6 text-2xl">
                1
              </div>
              <h3 className="text-2xl text-[#1E1E1E] mb-4">
                Отправьте материалы
              </h3>
              <p className="text-[#1E1E1E]/70 leading-relaxed">
                Поделитесь фотографиями товаров и предпочтениями бренда через чат или email.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E7C8C4] text-[#1E1E1E] flex items-center justify-center mx-auto mb-6 text-2xl">
                2
              </div>
              <h3 className="text-2xl text-[#1E1E1E] mb-4">
                Выберите модели
              </h3>
              <p className="text-[#1E1E1E]/70 leading-relaxed">
                Используйте наши модели или отправьте фото своих
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E7C8C4] text-[#1E1E1E] flex items-center justify-center mx-auto mb-6 text-2xl">
                3
              </div>
              <h3 className="text-2xl text-[#1E1E1E] mb-4">
                Получите результаты
              </h3>
              <p className="text-[#1E1E1E]/70 leading-relaxed mb-4">
                Получите готовые изображения (правки и доработка включены)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-4">
              Почему виртуальная примерка?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#E7C8C4]/30 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-[#1E1E1E]" />
                </div>
                <p className="text-[#1E1E1E]/80 leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-32 bg-[#F7F4F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-4">
              Цены
            </h2>
            <p className="text-lg text-[#1E1E1E]/60">
              Выберите удобный формат оплаты
            </p>
          </motion.div>

          {/* Pricing Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-[#1E1E1E]/10 bg-white h-full">
                  <div className="mb-8">
                    <h3 className="text-3xl text-[#1E1E1E] mb-2">{option.name}</h3>
                    <p className="text-[#1E1E1E]/60">{option.subtitle}</p>
                  </div>

                  {option.type === 'per-image' ? (
                    <div className="space-y-4">
                      {option.formats.map((format, idx) => (
                        <div key={idx} className="p-4 border border-[#1E1E1E]/10 rounded-lg hover:border-[#E7C8C4] transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg text-[#1E1E1E]">{format.name}</span>
                            <span className="text-xl text-[#B89B6D]">{format.price}</span>
                          </div>
                          <p className="text-sm text-[#1E1E1E]/60">{format.desc}</p>
                        </div>
                      ))}
                      <Button 
                        onClick={() => scrollToSection('contact')}
                        className="w-full mt-6 bg-[#E7C8C4] hover:bg-[#E7C8C4]/90 text-[#1E1E1E]"
                      >
                        Заказать изображение
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {option.plans.map((plan, idx) => (
                        <div 
                          key={idx} 
                          className={`p-4 border rounded-lg hover:border-[#E7C8C4] transition-colors ${
                            plan.popular ? 'border-[#E7C8C4] bg-[#E7C8C4]/5' : 'border-[#1E1E1E]/10'
                          }`}
                        >
                          {plan.popular && (
                            <span className="inline-block bg-[#B89B6D] text-white px-3 py-1 rounded-full text-xs mb-3">
                              Популярный
                            </span>
                          )}
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg text-[#1E1E1E]">{plan.name}</span>
                            <span className="text-xl text-[#B89B6D]">{plan.price}</span>
                          </div>
                          <p className="text-sm text-[#1E1E1E]/80 mb-1">{plan.images}</p>
                          <p className="text-sm text-[#1E1E1E]/60">{plan.formats}</p>
                        </div>
                      ))}
                      <Button 
                        onClick={() => scrollToSection('contact')}
                        className="w-full mt-6 bg-[#1E1E1E] hover:bg-[#1E1E1E]/90 text-white"
                      >
                        Выбрать подписку
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Price Factors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl text-[#1E1E1E] mb-4">Что влияет на стоимость?</h3>
              <p className="text-[#1E1E1E]/60">Цена зависит от выбранных параметров</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {priceFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 border-[#1E1E1E]/10 bg-white h-full">
                    <h4 className="text-lg text-[#1E1E1E] mb-4">{factor.title}</h4>
                    <ul className="space-y-2">
                      {factor.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#1E1E1E]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E7C8C4] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 p-6 bg-white border border-[#1E1E1E]/10 rounded-lg text-center"
            >
              <p className="text-[#1E1E1E]/80">
                <span className="text-[#B89B6D]">Не знаете, что выбрать?</span> Свяжитесь с нами, и мы поможем подобрать оптимальный вариант для вашего бренда.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Model Gallery */}
      <section id="gallery" className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 lg:px-8 mb-12"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E]">
              Галерея моделей
            </h2>
          </motion.div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-8 pb-4 scrollbar-hide scroll-smooth">
              {models.map((model, index) => (
                <motion.div 
                  key={model.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] snap-start group cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#F7F4F3]">
                    <ImageWithFallback 
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl text-[#1E1E1E] mb-1">{model.name}</h3>
                  <p className="text-sm text-[#1E1E1E]/60">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-32 bg-[#F7F4F3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-4">
              Часто задаваемые вопросы
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  Могу ли я использовать свои фотографии моделей?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  Да. Отправьте качественные изображения с соответствующим согласием, и мы оденем на них ваши товары.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  Наскол��ко точно передаются детали ткани?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  Мы точно сохраняем прозрачность кружева, детали вышивки и цветопередачу.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  Каковы сроки выполнения?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  Стандарт: 72 часа. Профессиональный/Корпоративный: 48 часов или меньше.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  Это безопасно с точки зрения конфиденциальности?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  Да. Все материалы обрабатываются безопасно. Мы не храним и не используем ваши изображения повторно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  Могу ли я запросить индивидуальные позы?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  Да. Поделитесь руководством по стилю вашего бренда, и мы подстроимся под вашу эстетику.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-[#1E1E1E]/10 rounded-lg px-6">
                <AccordionTrigger className="text-[#1E1E1E] text-left hover:no-underline">
                  В каких форматах вы предоставляете файлы?
                </AccordionTrigger>
                <AccordionContent className="text-[#1E1E1E]/70">
                  JPG или PNG высокого разрешения, оптимизированные для электронной коммерции.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl text-[#1E1E1E] mb-6">
              Начать работу
            </h2>
            <p className="text-xl text-[#1E1E1E]/70 mb-12 max-w-2xl mx-auto">
              Отправьте нам фото ваших товаров. Мы ответим в течение 24 часов.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 border-[#1E1E1E]/10 hover:border-[#E7C8C4] transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-[#E7C8C4]/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E7C8C4] transition-colors">
                  <Mail className="h-8 w-8 text-[#1E1E1E]" />
                </div>
                <h3 className="text-2xl text-[#1E1E1E] mb-2">Email</h3>
                <p className="text-[#1E1E1E]/70 mb-4">
                  Отправьте свои материалы
                </p>
                <a 
                  href="mailto:hello@vtolingerie.com" 
                  className="text-[#B89B6D] hover:text-[#B89B6D]/80 transition-colors"
                >
                  hello@vtolingerie.com
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 border-[#1E1E1E]/10 hover:border-[#E7C8C4] transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-[#E7C8C4]/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E7C8C4] transition-colors">
                  <MessageCircle className="h-8 w-8 text-[#1E1E1E]" />
                </div>
                <h3 className="text-2xl text-[#1E1E1E] mb-2">Telegram</h3>
                <p className="text-[#1E1E1E]/70 mb-4">
                  Быстрые вопросы
                </p>
                <button className="text-[#B89B6D] hover:text-[#B89B6D]/80 transition-colors">
                  Начать чат
                </button>
              </Card>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-[#1E1E1E]/60 mt-12"
          >
            Время ответа: 4 часа • Пн-Пт 9:00-18:00 МСК
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl mb-4">VTO Lingerie</div>
              <p className="text-white/60 text-sm">
                Решения виртуальной примерки для современных брендов белья
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-white/60">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('cases')} className="text-white/80 hover:text-white transition-colors">Примеры</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors">Как это работает</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors">Цены</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-white/60">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('faq')} className="text-white/80 hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Контакты</button></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-white/60">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 VTO Lingerie. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
