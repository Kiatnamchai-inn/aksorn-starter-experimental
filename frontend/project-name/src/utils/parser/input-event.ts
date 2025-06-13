import { ChangeEvent } from 'react';

export const registerNumericNumbers = (e: ChangeEvent<HTMLInputElement>): string => {
  return e.target.value.replace(/[^0-9]/g, '');
};
