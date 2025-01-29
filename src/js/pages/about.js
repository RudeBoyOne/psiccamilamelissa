import '../../css/pages/about.scss';
import avatar from '../../assets/images/avatar.jpg';

const about = `
    <section class="p-3 w-100">
        <div class="container mt-5">
            <h1 class="mb-4"> Olá, eu sou a Camila </h1>
            <p class="lh-lg text-justify">
                psicóloga formada pela Universidade Cruzeiro do Sul desde 2019. Trabalho como psicóloga clínica desde a minha formação, e sou completamente encantada pela minha profissão. Adoro a escolha que fiz de diariamente escutar pessoas contando suas histórias, ressignificando suas dores e compartilhando suas alegrias. 
            </p>
            <p class="lh-lg text-justify">
                Desde antes da graduação já tinha uma forte inclinação a psicanálise. Em casa, tinha acesso a livros freudianos e ainda na adolescência iniciei algumas leituras que determinaram minha escolha profissional. Hoje percebo que desde muito pequena sou sensível e atenta a tudo que não é muito concreto, ao lado meio místico e desconhecido em todos nós e acredito que minha maneira filosófica de questionar e olhar as pessoas e as situações justificam, em partes, minha atração pelo inconsciente humano.
            </p>
            <p class="lh-lg text-justify">
                Na graduação conheci outras abordagens da psicologia e com isso, fui me aproximando ainda mais da psicanálise. Hoje em dia me atraio para questões raciais e de gênero na escuta clínica e recentemente, me permitindo estudos dentro da parentalidade e de pautas acerca do abandono afetivo. 
            </p>
            <p class="lh-lg text-justify">
                Na minha trajetória profissional, tenho experiencia clínica com crianças a partir de 4 anos de idade, adolescentes e adultos. Conclui um curso de aperfeiçoamento em Clínica Psicanalítica em 2022 e recentemente publiquei meu primeiro artigo em uma revista de psicanálise, fato que me trouxe muita satisfação acadêmica e profissional. 
            </p>
        </div>
        <hr class="border border-color border-1 rounded-3 mt-5 mb-5">
        <div class="container p-3">
            <h2 class="text-center mb-5"> Minha trajetória </h2>
            <div class="timeline">
                <div class="row mb-3">
                    <div class="col-md-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-md-row shadows">
                            <div class="col-md-4 d-flex">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Estágio no terceiro setor</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2016 à 2019</h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 offset-md-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-md-row-reverse shadows">
                            <div class="col-md-4">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Formação na Cruzeiro do Sul</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2019</h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-md-row shadows">
                            <div class="col-md-4 d-flex">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Atendimento clínico presencial e a distância</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2020 / até o momento </h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 offset-md-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-md-row-reverse shadows">
                            <div class="col-md-4">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Curso em Clínica Psicanalítica</h5>
                                    <h5 class="card-subtitle">Instituto Sedes Sapientiae</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2022</h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-md-row shadows">
                            <div class="col-md-4 d-flex">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Apresentação de artigo</h5>
                                    <h6 class="card-subtitle">Congresso ABRASME – Associação Brasileira de Saúde Mental</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2022</h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 offset-md-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-md-row-reverse shadows">
                            <div class="col-md-4">
                                <img src="${avatar}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Publicação de artigo</h5>
                                    <h6 class="card-subtitle">Revista Circulo Psicanalítico do Rio de Janeiro</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2024</h6>
                                    <p class="card-text">Descrição do fato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

export default about;