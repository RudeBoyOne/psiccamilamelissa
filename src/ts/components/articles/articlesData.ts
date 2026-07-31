import amorFundantePdf from '../../../assets/files/amor-fundante.pdf';
import imgArtigoEnclausuramento from '../../../assets/images/oEnclasuramentoDaPalavraImg.png';
import imgArtigoAmorFundante from '../../../assets/images/amor-fundante-img.png';

export type ArticleData = {
  title: string;
  img: string;
  description: string;
  externalUrl?: string;
  pdfUrl?: string;
};

const articlesMap: Record<string, ArticleData> = {
    enclausuramentoDaPalavra: {
        title: 'O Enclausuramento da Palavra',
        img: imgArtigoEnclausuramento,
        description: 'Cadernos de Psicanálise | CPRJ, v. 46, n. 51, p. 87-102, 5 nov. 2024.',
        externalUrl: 'https://www.cprj.com.br/ojs_cprj/index.php/cprj/article/view/419'
    },
    amorFundante: {
        title: 'O Amor Fundante',
        img: imgArtigoAmorFundante,
        description: 'Uma reflexão sobre a relação de amor e cuidado com bebês',
        pdfUrl: amorFundantePdf,
    }
};

export default articlesMap;
