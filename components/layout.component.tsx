import type { AppProps } from 'next/app';
import SideNavbar from "./side-navbar.component";
import TopNavbar from "./top-navbar.component";
import { Lato } from '@next/font/google';
import css from "../styles/Layout.module.css";

const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function AppLayout({ Component, pageProps }: any) {
    return (
        <main className={lato.className}>
            <header className={`flex items-center justify-between ${css.topNavbarContainer}`}>
                <TopNavbar />
            </header>
            <aside className={`${css.asideContainer}`}>
                <SideNavbar />
            </aside>
            <section className={css.container}>
                <Layout Component={Component} pageProps={pageProps} />
            </section>
        </main>
    );
}

const Layout = ({ Component, pageProps }: any) => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return <Component {...pageProps} />;
    }
};
