import { Locale } from 'i18n-config';
import Home from './views/home/page';

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return <Home lang={lang} />;
};

export default Page;
