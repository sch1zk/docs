import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { LastUpdate } from "@/components/last-update";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export const metadata = {
  title: "JavaScript",
  description: "Краткое руководство по языку JavaScript",
};

// const banner = <Banner storageKey="some-key"></Banner>
const navbar = (
  <Navbar
    logo={<b>Главная</b>}
    projectLink="https://github.com/sch1zk/docs-js/tree/main"
  />
)
const footer = (
  <Footer>
    <a href="https://github.com/sch1zk">© {new Date().getFullYear()} sch1zk</a>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/sch1zk/docs-js/tree/main"
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          darkMode={false}
          nextThemes={{ defaultTheme: 'dark' }}
          feedback={{ content: null }}
          editLink="Редактировать"
          lastUpdated={<LastUpdate />}
          navigation={{
            prev: true,
            next: true
          }}
          sidebar={{ toggleButton: false }}
          toc={{
            backToTop: "Наверх",
            title: "Навигация"
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
