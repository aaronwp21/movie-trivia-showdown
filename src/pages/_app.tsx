import { QuestionsProvider } from '@/components/contexts/questions.context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuestionsProvider>
      <Component {...pageProps} />
    </QuestionsProvider>
  );
}
