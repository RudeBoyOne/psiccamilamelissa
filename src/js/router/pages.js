import homePage from '../pages/home';
import aboutPage from '../pages/about';
import { articles  as articlesPage } from '../pages/articles/articles';
import { contact as contactPage } from '../pages/contact/contact';
import { displayPdf } from '../pages/articles/displayPdf'

const pages = {
    '': homePage,
    '#home': homePage,
    '#about': aboutPage,
    '#articles': articlesPage,
    '#display_pdf': displayPdf,
    '#contact': contactPage
};

export default pages;