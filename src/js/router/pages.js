import homePage from '../pages/home';
import aboutPage from '../pages/about';
import { articles  as articlesPage } from '../pages/articles/articles';
import { contact as contactPage } from '../pages/contact/contact';


const pages = {
    '': homePage,
    '#home': homePage,
    '#about': aboutPage,
    '#articles': articlesPage,
    '#contact': contactPage
};

export default pages;