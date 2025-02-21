import '../../css/pages/about.scss';
import estagio from '../../assets/images/estagio.png';
import formatura from '../../assets/images/formatura.png';
import atendimento from '../../assets/images/atendimento.png';
import congresso from '../../assets/images/congresso.png';
import sedes from '../../assets/images/sedes.png';
import cprj from '../../assets/images/cprj.jpg';

const about = `
    <section class="p-3 w-100">
        <div class="container mt-4">
            <h1 class="mb-4"> Olá, eu sou a Camila </h1>
            <p class="lh-lg text-justify">
                psicóloga formada pela Universidade Cruzeiro do Sul desde 2019. Trabalho como psicóloga clínica desde a minha formação e sou completamente encantada pela minha profissão. Adoro a escolha que fiz de diariamente escutar pessoas contando suas histórias, ressignificando suas dores e compartilhando suas alegrias.  
            </p>
            <p class="lh-lg text-justify">
                Desde antes da graduação notei que tinha uma forte inclinação a psicanálise. Em casa, tinha acesso a livros freudianos e ainda na adolescência iniciei algumas leituras que determinaram minha escolha profissional. Hoje percebo que desde muito pequena sou sensível e atenta a tudo que não é muito concreto, ao lado desconhecido em todos nós e acredito que minha maneira filosófica de questionar e olhar as pessoas e as situações justificam, em partes, minha atração pelo inconsciente humano. 
            </p>
            <p class="lh-lg text-justify">
                Na graduação conheci outras abordagens da psicologia e com isso, fui me aproximando ainda mais da psicanálise. Hoje em dia me atraio para questões raciais e de gênero na escuta clínica e recentemente, me permitindo estudos sobre parentalidade e de pautas acerca do abandono afetivo. 
            </p>
            <p class="lh-lg text-justify">
                Na minha trajetória profissional, tenho experiencia clínica com crianças a partir de 4 anos de idade, adolescentes e adultos. Conclui um curso de aperfeiçoamento em Clínica Psicanalítica em 2022 e recentemente publiquei meu primeiro artigo em uma revista de psicanálise, fato que me trouxe muita satisfação acadêmica e profissional. 
            </p>
        </div>
        <hr class="border border-1 rounded-3 mt-5 mb-5">
        <div class="container p-3">
            <h2 class="text-center mb-5"> Minha trajetória </h2>
            <div class="timeline">
                <div class="row mb-5">
                    <div class="col-lg-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-lg-row shadows">
                            <div class="col-lg-4 d-flex">
                                <img src="${estagio}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Estágio no terceiro setor</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2016 à 2019</h6>
                                    <p class="card-text">Atendimento clínico institucional à crianças e adolescentes. Atuação como Educadora Social.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 offset-lg-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-lg-row-reverse shadows">
                            <div class="col-lg-4">
                                <img src="${formatura}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8">
                                <div class="card-body">
                                    <h5 class="card-title">Formação na Cruzeiro do Sul</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2019</h6>
                                    <p class="card-text">Conlusão da graduação em Psicologia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-lg-row shadows">
                            <div class="col-lg-4 d-flex">
                                <img src="${atendimento}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Atendimento clínico presencial e a distância</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2020 / até o momento </h6>
                                    <p class="card-text">Atendimento clínico à adolescentes e adultos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 offset-lg-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-lg-row-reverse shadows">
                            <div class="col-lg-4">
                                <img src="${sedes}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8">
                                <div class="card-body">
                                    <h5 class="card-title">Curso em Clínica Psicanalítica - Conflito e Sintoma</h5>
                                    <h5 class="card-subtitle">Instituto Sedes Sapientiae</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2022 à 2024</h6>
                                    <p class="card-text">Estudo aprofundado nas obras completas de Freud e estudos de caso.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 d-flex justify-content-end">
                        <!-- Evento à esquerda -->
                        <div class="card w-100 d-flex flex-column flex-lg-row shadows">
                            <div class="col-lg-4 d-flex">
                                <img src="${congresso}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8 d-flex flex-column">
                                <div class="card-body">
                                    <h5 class="card-title">Apresentação do meu artigo</h5>
                                    <h6 class="card-subtitle">Congresso ABRASME – Associação Brasileira de Saúde Mental</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2022</h6>
                                    <p class="card-text">Apresentação e debate do artigo "O Enclausuramento da palavra".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 offset-lg-6 d-flex justify-content-start">
                        <!-- Evento à direita -->
                        <div class="card w-100 d-flex flex-column flex-lg-row-reverse shadows">
                            <div class="col-lg-4">
                                <img src="${cprj}" class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-lg-8">
                                <div class="card-body">
                                    <h5 class="card-title">Publicação do meu artigo</h5>
                                    <h6 class="card-subtitle">Revista Circulo Psicanalítico do Rio de Janeiro</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">2024</h6>
                                    <p class="card-text">O enclausuramento da palavra. Cadernos de Psicanálise | CPRJ, v. 46, n. 51, p. 87-102, 5 nov. 2024. </p>
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