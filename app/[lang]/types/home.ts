import { Locale } from 'i18n-config';
import { Dictionary } from './dictionary';

export type HomeProps = { dictionary: Dictionary; lang?: Locale };

export interface FormData {
  name: string;
  description: string;
  state: string;
}
