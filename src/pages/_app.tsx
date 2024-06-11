import type {AppContext, AppInitialProps, AppProps} from 'next/app';
import App from 'next/app';

type AppOwnProps = {example: string};

export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const example = 'example data'; // Define your example data here
  return {...ctx, example, pageProps: {...ctx.pageProps, localization: 'en'}};
};
