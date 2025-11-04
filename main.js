const caixapPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");






const perguntas = [
    {

        enunciado: "Você prefere fazer seu hobby em casa ou fora de casa?",
        alternativas: [
            {
                texto: "Fazer seu hobby em casa.",
                afirmacao:[ "Você se sente mais confortável e relaxado ao praticar seu hobby no ambiente de casa.",
                "Você valoriza a privacidade e o controle do ambiente doméstico para seu hobby."]
            },
            {
                texto: "Fazer seu hobby fora de casa.",
                afirmacao:[ "Você gosta de explorar novos lugares e aproveitar o ar livre ao realizar seu hobby.",
                "Você se energiza com as mudanças de cenário e interações externas no hobby."]
            }
        ]
    },
    {
        enunciado: "Com que frequência você pratica seu hobby?",
        alternativas: [
            {
                texto: "Todos os dias ou quase todos os dias.",
                afirmacao:[ "Você integra seu hobby na rotina diária para manter o equilíbrio e o prazer constante.",
                "Você usa o hobby diariamente para recarregar energias e manter a consistência."]
            },
            {
                texto: "Algumas vezes por semana ou menos.",
                afirmacao:[ "Você prefere reservar momentos especiais para seu hobby, tornando-o uma recompensa ocasional.",
                "Você gosta de espaçar o hobby para que ele permaneça fresco e excitante."]
            }
        ]
    },
    {
        enunciado: "Você prefere hobbies criativos ou físicos?",
        alternativas: [
            {
                texto: "Hobbies criativos, como pintar ou escrever.",
                afirmacao:[ "Você gosta de expressar ideias e emoções através de criações artísticas e imaginativas.",
                "Você encontra satisfação na inovação e na expressão pessoal através de artes."]
            },
            {
                texto: "Hobbies físicos, como correr ou dançar.",
                afirmacao:[ "Você valoriza o movimento e a energia que os hobbies ativos trazem para o corpo e a mente.",
                "Você aprecia o bem-estar físico e mental promovido por atividades dinâmicas."]
            }
        ]
    },
    {
        enunciado: "Você compartilha seu hobby com outras pessoas?",
        alternativas: [
            {
                texto: "sim, gosto de fazer com amigos ou família",
                afirmacao:[ "Você encontra mais diversão ao conectar-se com outros e trocar experiências no hobby.",
                "Você fortalece laços sociais ao incluir pessoas próximas no seu hobby."]
            },
            {
                texto: "Não, prefiro praticar sozinho.",
                afirmacao:[ "Você aprecia a introspecção e o foco pessoal que um hobby solitário proporciona.",
                "Você usa o hobby sozinho para momentos de reflexão e autodescoberta."]
            }
        ]
    },
    {
        enunciado: "Qual é o melhor horário do dia para seu hobby?",
        alternativas: [
            {
                texto: "De manhã ou à tarde.",
                afirmacao:[ "Você usa o hobby para energizar o dia e manter a produtividade alta.",
                "Você inicia o dia com o hobby para ganhar motivação e clareza mental."]
            },
            {
                texto: "À noite ou antes de dormir",
                afirmacao:[ "Você relaxa com o hobby no final do dia, ajudando a desconectar e descansar melhor.",
                "Você encerra o dia com o hobby para aliviar o estresse acumulado."]
            }
        ]
    },
 {
        enunciado: "Você já pensou em transformar seu hobby em profissão?",
        alternativas: [
            {
                texto: "Sim, adoraria trabalhar com isso.",
                afirmacao:[ "Você sonha em unir paixão e carreira para uma vida mais realizada profissionalmente.",
                "Você vê potencial no hobby para se tornar uma fonte de renda e realização."]
            },
            {
                texto: "Não, prefiro mantê-lo como lazer.",
                afirmacao:[ "Você preserva o hobby como um escape puro, sem pressões de trabalho ou obrigações.",
                "Você mantém o hobby separado do trabalho para preservar sua essência recreativa."]
            }
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPerguntas(){

    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPerguntas();

