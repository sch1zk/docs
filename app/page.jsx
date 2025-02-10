import "@/styles/index.css";

export default function Home() {
  return (
    // <div className="flex flex-col justify-center items-center h-[calc(100dvh-var(--nextra-navbar-height))]">
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-var(--nextra-navbar-height))]">
      <div className="flex flex-col items-center gap-4">
        <span className="text-6xl font-bold">JavaScript</span>
        <div className="flex flex-col items-center">
          <a href="/js/introduction-to-javascript" className="topic-href">Введение</a>
          <a href="/js/variables" className="topic-href">Переменные</a>
          <a href="/js/data-types" className="topic-href">Типы данных</a>
          <a href="/js/type-conversion" className="topic-href">Преобразование типов</a>
          <a href="/js/operators" className="topic-href">Операторы</a>
          <a href="/js/conditional-statements-and-loops" className="topic-href">Условные конструкции и циклы</a>
          <a href="/js/functions" className="topic-href">Функции</a>
          <a href="/js/arrays" className="topic-href">Массивы</a>
          <a href="/js/strings" className="topic-href">Строки</a>
          <a href="/js/objects" className="topic-href">Объекты</a>
          <a href="/js/classes" className="topic-href">Классы</a>
          <a href="/js/error-handling" className="topic-href">Обработка ошибок</a>
          <a href="/js/promise-async-and-await" className="topic-href">Promise, async и await</a>
          <a href="/js/events" className="topic-href">События</a>
          <a href="/js/modules" className="topic-href">Модули</a>
        </div>
      </div>
    </div>
  );
}