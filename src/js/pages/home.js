import imgHome from '../../assets/images/imgHome2.png'
import '../../css/pages/home.scss'

const homePage = `
    <section class="d-flex flex-column-reverse flex-lg-row align-items-center p-3">
        <section class="col-12 col-lg-6 pt-4 p-lg-4 d-flex flex-column justify-content-evenly text-section">
            <h1 class="fw-bold fs-6 text-decoration-underline text-uppercase">  Atendimento clínico de qualidade </h1>
            <p class="text-justify lh-lg">
                focado na abordagem psicanalítica. A psicanálise é uma ferramenta poderosa para explorar o inconsciente e entender os fatores que influenciam nossos comportamentos e emoções. Meu objetivo é ajudar você a enfrentar desafios e compreender suas emoções.
            </p>
            <h2 class="fw-bold fs-6 fs-sm-2 text-decoration-underline text-uppercase"> Por que escolher a psicanálise? </h2>
            <p class="text-justify lh-lg">
                A psicanálise oferece um espaço para mergulhar profundamente em si mesmo, revelando aspectos ocultos que influenciam seu bem-estar emocional. Compreender o inconsciente pode ser transformador e libertador, permitindo uma vida mais consciente.
            </p>
            <h2 class="fw-bold fs-6 fs-sm-2 text-decoration-underline text-uppercase"> Na minha clínica </h2>
            <p class="text-justify lh-lg">
                você encontrará um ambiente acolhedor e seguro, onde suas histórias, dores e alegrias serão respeitadas e valorizadas. Acredito que cada indivíduo é único e merece uma escuta atenta e sensível, para que possamos juntos ressignificar experiências e promover o autoconhecimento.
            </p>
            <p class="text-justify fw-bold text-uppercase">
                Venha conhecer meu trabalho e vamos juntos trilhar um caminho de autoconhecimento e transformação.
            </p>

            <div id="container" class="d-flex justify-content-center button-home">
                <a id="whatsapp-link" href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise." target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Vamos Conversar? <i class="bi bi-whatsapp ms-1"></i> </span>
                </a>
            </div>



        </section>
        <section class="col-12 col-lg-6">
            <img src=${imgHome} alt="Psicóloga Camila Melissa de Souza , uma mulher negra de 30 anos usando óculos e cabelo black power, com colar de continhas verdes e uma camiseta branca" class="img-fluid rounded">
        </section>
    </section> 
`;

const eventButton = () => {
    const link = document.getElementById("whatsapp-link");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const url = link.getAttribute('href');
        setTimeout(function () {
            link.blur();
            window.open(url, "_blank");
        }, 600)
    });
}


export { homePage, eventButton };