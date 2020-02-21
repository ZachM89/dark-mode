import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);
    console.log(darkMode);
    console.log(setDarkMode);

    return [darkMode, setDarkMode];
}