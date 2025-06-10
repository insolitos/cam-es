// Dados da aplicação
const appData = {
    cronologia: [
        {"ano": "~1524", "evento": "Nascimento em Lisboa"},
        {"ano": "1527", "evento": "Mudança para Coimbra"},
        {"ano": "~1544", "evento": "Possível entrada na Universidade"},
        {"ano": "1550", "evento": "Serviço militar em Ceuta"},
        {"ano": "1552", "evento": "Prisão em Lisboa"},
        {"ano": "1553", "evento": "Partida para a Índia"},
        {"ano": "1570", "evento": "Naufrágio no rio Mekong"},
        {"ano": "1572", "evento": "Publicação d'Os Lusíadas"},
        {"ano": "1580", "evento": "Morte a 10 de junho"}
    ],
    citacoes: [
        "Amor é fogo que arde sem se ver",
        "Mudam-se os tempos, mudam-se as vontades",
        "As armas e os barões assinalados",
        "Por mares nunca de antes navegados",
        "Que amor seja fogo é privilégio seu"
    ],
    episodios_lusiadas: [
        {
            "nome": "Inês de Castro",
            "descricao": "O amor trágico que morreu por amar, exemplo do conflito entre razão de estado e sentimento individual."
        },
        {
            "nome": "Adamastor",
            "descricao": "O gigante pétreo do Cabo da Boa Esperança, símbolo dos perigos enfrentados pelos navegadores."
        },
        {
            "nome": "Ilha dos Amores",
            "descricao": "A recompensa divina concedida aos heróis pelos seus feitos épicos."
        }
    ],
    sonetos_famosos: [
        {
            "primeiro_verso": "Amor é fogo que arde sem se ver",
            "tema": "Contradições do amor através de paradoxos"
        },
        {
            "primeiro_verso": "Mudam-se os tempos, mudam-se as vontades",
            "tema": "Reflexão sobre a mutabilidade universal"
        }
    ]
};

// Conteúdo dos modais
const modalContent = {
    biografia: {
        title: "Biografia de Luís de Camões",
        content: `
            <h3>Vida e Percurso</h3>
            <p><strong>Nascimento (~1524):</strong> Luís Vaz de Camões nasceu provavelmente em Lisboa, numa família da pequena nobreza.</p>
            
            <h3>Juventude e Formação</h3>
            <p><strong>Lisboa e Coimbra:</strong> Passou a juventude entre Lisboa e Coimbra, onde possivelmente estudou na Universidade, adquirindo vasta cultura clássica.</p>
            
            <h3>Serviço Militar</h3>
            <p><strong>Ceuta (1550):</strong> Serviu militarmente em Ceuta, onde perdeu o olho direito em combate, característica que o marcaria para sempre.</p>
            
            <h3>Degredo e Aventuras</h3>
            <p><strong>Índia (1553-1570):</strong> Degredado para a Índia, onde passou 17 anos. Durante este período, escreveu grande parte d'Os Lusíadas.</p>
            
            <h3>O Naufrágio Lendário</h3>
            <p><strong>Rio Mekong (1570):</strong> Sobreviveu a um naufrágio no rio Mekong, salvando apenas os manuscritos d'Os Lusíadas, episódio que se tornou lendário.</p>
            
            <h3>Regresso e Reconhecimento</h3>
            <p><strong>Publicação (1572):</strong> Regressou a Lisboa e publicou Os Lusíadas em 1572, dedicando a obra ao rei D. Sebastião.</p>
            
            <h3>Últimos Anos</h3>
            <p><strong>Pobreza e Morte (1580):</strong> Morreu pobre a 10 de junho de 1580, coincidindo simbolicamente com a perda da independência portuguesa.</p>
        `
    },
    lusiadas: {
        title: "Os Lusíadas - A Epopeia Nacional",
        content: `
            <h3>A Obra-Prima</h3>
            <p><strong>Publicação:</strong> 1572, dedicada ao rei D. Sebastião</p>
            <p><strong>Estrutura:</strong> 10 cantos, 1102 estrofes em oitava rima</p>
            
            <h3>Planos Narrativos</h3>
            <ul>
                <li><strong>Viagem:</strong> A expedição de Vasco da Gama à Índia</li>
                <li><strong>História:</strong> Os grandes feitos da História de Portugal</li>
                <li><strong>Mitologia:</strong> Intervenção dos deuses pagãos</li>
                <li><strong>Pessoal:</strong> Reflexões do poeta sobre o seu tempo</li>
            </ul>
            
            <h3>Episódios Famosos</h3>
            <div class="episodes-container">
                ${appData.episodios_lusiadas.map(ep => `
                    <div class="episode-item">
                        <div class="episode-title">${ep.nome}</div>
                        <p>${ep.descricao}</p>
                    </div>
                `).join('')}
            </div>
            
            <h3>Importância</h3>
            <p>Os Lusíadas elevaram a língua portuguesa ao estatuto das grandes línguas épicas da Europa, celebrando não apenas os descobrimentos mas toda a gesta lusitana.</p>
        `
    },
    lirica: {
        title: "Poesia Lírica de Camões",
        content: `
            <h3>Tradições Poéticas</h3>
            <p><strong>Medida Velha:</strong> Seguindo a tradição peninsular, com redondilhas e formas populares</p>
            <p><strong>Medida Nova:</strong> Influência italiana, especialmente petrarquiana, com sonetos e canções</p>
            
            <h3>Sonetos Imortais</h3>
            <div class="sonnets-container">
                ${appData.sonetos_famosos.map(soneto => `
                    <div class="sonnet-item">
                        <div class="sonnet-verse">"${soneto.primeiro_verso}"</div>
                        <div class="sonnet-theme">${soneto.tema}</div>
                    </div>
                `).join('')}
            </div>
            
            <h3>Temas Principais</h3>
            <ul>
                <li><strong>Amor:</strong> Contradições e paradoxos do sentimento amoroso</li>
                <li><strong>Natureza:</strong> Descrições líricas de paisagens e elementos naturais</li>
                <li><strong>Desconcerto do Mundo:</strong> Crítica aos valores do seu tempo</li>
                <li><strong>Mutabilidade:</strong> Reflexões sobre a passagem do tempo</li>
            </ul>
            
            <h3>Influências</h3>
            <p>Camões soube fundir magistralmente a tradição popular portuguesa com as formas eruditas italianas, criando uma síntese única na literatura europeia.</p>
        `
    },
    legado: {
        title: "O Legado Imortal de Camões",
        content: `
            <h3>Reconhecimento Mundial</h3>
            <p>Camões é reconhecido como um dos quatro grandes épicos universais, ao lado de Homero, Virgílio e Dante, e comparado aos maiores dramaturgos como Shakespeare.</p>
            
            <h3>Símbolo Nacional</h3>
            <p><strong>Dia de Portugal:</strong> O 10 de junho, dia da sua morte, é celebrado como Dia de Portugal, de Camões e das Comunidades Portuguesas.</p>
            
            <h3>Comemorações 2024</h3>
            <p><strong>500 Anos:</strong> Em 2024 celebram-se os 500 anos do nascimento de Camões, reconhecendo a sua importância para a cultura lusófona mundial.</p>
            
            <h3>Influência Literária</h3>
            <ul>
                <li>Inspiração para gerações de poetas portugueses e brasileiros</li>
                <li>Tradução d'Os Lusíadas para dezenas de línguas</li>
                <li>Referência obrigatória nos estudos de literatura comparada</li>
                <li>Modelo de excelência na língua portuguesa</li>
            </ul>
            
            <h3>Presença Global</h3>
            <p>O nome de Camões marca presença em monumentos, ruas, escolas e instituições por todo o mundo lusófono, testemunhando a sua importância duradoura.</p>
            
            <h3>Relevância Contemporânea</h3>
            <p>A obra camoniana continua a ser estudada e admirada, não apenas como património histórico, mas como fonte viva de inspiração e reflexão sobre a condição humana.</p>
        `
    }
};

// Sistema de Modal - CORRIGIDO
class ModalSystem {
    constructor() {
        this.overlay = document.getElementById('modalOverlay');
        this.content = document.getElementById('modalContent');
        this.body = document.getElementById('modalBody');
        this.closeButton = document.getElementById('modalClose');
        this.isOpen = false;
        this.keydownHandler = null;
        
        this.init();
    }
    
    init() {
        // Fechar com botão X
        this.closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.close();
        });
        
        // Fechar ao clicar no overlay (fora do conteúdo)
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });
        
        // Prevenir o fechamento ao clicar no conteúdo do modal
        this.content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    addKeydownListener() {
        this.keydownHandler = (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                e.preventDefault();
                this.close();
            }
        };
        document.addEventListener('keydown', this.keydownHandler);
    }
    
    removeKeydownListener() {
        if (this.keydownHandler) {
            document.removeEventListener('keydown', this.keydownHandler);
            this.keydownHandler = null;
        }
    }
    
    open(content) {
        this.body.innerHTML = content;
        this.overlay.classList.add('active');
        this.isOpen = true;
        
        // Adicionar listener para tecla Escape
        this.addKeydownListener();
        
        // Focar no botão de fechar para acessibilidade
        setTimeout(() => {
            this.closeButton.focus();
        }, 100);
        
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.overlay.classList.remove('active');
        this.isOpen = false;
        
        // Remover listener da tecla Escape
        this.removeKeydownListener();
        
        // Restaurar scroll do body
        document.body.style.overflow = '';
        
        // Limpar conteúdo após animação
        setTimeout(() => {
            if (!this.isOpen) {
                this.body.innerHTML = '';
            }
        }, 300);
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    const modal = new ModalSystem();
    
    // Preencher cronologia
    const timelineContainer = document.querySelector('.timeline-container');
    appData.cronologia.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.ano}</div>
            <div class="timeline-event">${item.evento}</div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
    
    // Preencher citações
    const quotesContainer = document.querySelector('.quotes-container');
    appData.citacoes.forEach(citacao => {
        const quoteItem = document.createElement('div');
        quoteItem.className = 'quote-item';
        quoteItem.innerHTML = `
            <div class="quote-text">${citacao}</div>
        `;
        quotesContainer.appendChild(quoteItem);
    });
    
    // Event listeners para navegação
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const content = modalContent[section];
            
            if (content) {
                const modalHTML = `
                    <h2>${content.title}</h2>
                    ${content.content}
                `;
                modal.open(modalHTML);
            }
        });
    });
    
    // Event listeners para itens da cronologia
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const data = appData.cronologia[index];
            const modalHTML = `
                <h2>${data.ano}</h2>
                <h3>${data.evento}</h3>
                <p>Este foi um momento crucial na vida de Camões, marcando uma etapa importante na sua jornada como poeta e homem do seu tempo.</p>
            `;
            modal.open(modalHTML);
        });
    });
    
    // Event listeners para citações
    const quoteItems = document.querySelectorAll('.quote-item');
    quoteItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const citacao = appData.citacoes[index];
            const modalHTML = `
                <h2>Citação Imortal</h2>
                <div style="text-align: center; font-size: 1.5rem; font-style: italic; margin: 2rem 0; color: var(--color-primary);">
                    "${citacao}"
                </div>
                <p>Esta é uma das frases mais emblemáticas de Camões, demonstrando a sua mestria poética e a profundidade das suas reflexões sobre a condição humana.</p>
            `;
            modal.open(modalHTML);
        });
    });
});