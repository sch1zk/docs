import "@/styles/index.css";
import Link from "next/link";

export default function Home() {
  return (
    // <div className="flex flex-col justify-center items-center h-[calc(100dvh-var(--nextra-navbar-height))]">
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-var(--nextra-navbar-height))]">
      <div className="flex flex-col items-center gap-4">
        <span className="text-6xl font-bold">JavaScript</span>
        <div className="flex flex-col items-center">
          <Link href="/js/introduction-to-javascript" className="topic-href">Введение</Link>
          <Link href="/js/variables" className="topic-href">Переменные</Link>
          <Link href="/js/data-types" className="topic-href">Типы данных</Link>
          <Link href="/js/type-conversion" className="topic-href">Преобразование типов</Link>
          <Link href="/js/operators" className="topic-href">Операторы</Link>
          <Link href="/js/conditional-statements-and-loops" className="topic-href">Условные конструкции и циклы</Link>
          <Link href="/js/functions" className="topic-href">Функции</Link>
          <Link href="/js/arrays" className="topic-href">Массивы</Link>
          <Link href="/js/strings" className="topic-href">Строки</Link>
          <Link href="/js/objects" className="topic-href">Объекты</Link>
          <Link href="/js/classes" className="topic-href">Классы</Link>
          <Link href="/js/error-handling" className="topic-href">Обработка ошибок</Link>
          <Link href="/js/promise-async-and-await" className="topic-href">Promise, async и await</Link>
          <Link href="/js/events" className="topic-href">События</Link>
          <Link href="/js/modules" className="topic-href">Модули</Link>
        </div>
      </div>
    </div>
  );
}