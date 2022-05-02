import '../styles/global.css';
import '../styles/variable.css';
import '../styles/reset.css';
import '../styles/responsive.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import UserLayout from '../components/Layouts/UserLayout';
import { SettingsConsumer, SettingsProvider } from '../context/settingsContext';
import ThemeComponent from '../components/Layouts/theme/ThemeComponent';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const App = (props: AppPropsWithLayout) => {
  const { Component, pageProps } = props;
  // Variables
  const getLayout = Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>
              {getLayout(<Component {...pageProps} />)}
            </ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

export default App;
