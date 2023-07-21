import { useRef } from 'react';

export function useDebounce(func, delay = 400) {
    const ref = useRef(null);

    return (...args) => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => func(...args), delay);
    };
};