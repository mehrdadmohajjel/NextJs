// import type {AppContext, AppInitialProps, AppProps} from 'next/app';
// import App from 'next/app';

// type AppOwnProps = {example: string};

// export default function MyApp({
//   Component,
//   pageProps,
//   example,
// }: AppProps & AppOwnProps) {
//   return (
//     <>
//       <p>Data: {example}</p>
//       <Component {...pageProps} />
//     </>
//   );
// }

// MyApp.getInitialProps = async (
//   context: AppContext
// ): Promise<AppOwnProps & AppInitialProps> => {
//   const ctx = await App.getInitialProps(context);
//   const example = 'example data'; // Define your example data here
//   return {...ctx, example, pageProps: {...ctx.pageProps, localization: 'en'}};
// };
import {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import {AppProps} from 'next/app';
import MainContext from '@/providers/MainContext';

export type NextPageWithLayout<Props> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<Props> = AppProps & {
  Component: NextPageWithLayout<Props>;
};
function App({Component, pageProps}: AppPropsWithLayout<any>) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <MainContext>{getLayout(<Component {...pageProps} />)}</MainContext>;
}

export default App;
