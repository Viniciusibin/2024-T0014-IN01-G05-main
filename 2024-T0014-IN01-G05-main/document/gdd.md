<img src="../assets/logointeli.png">


# GDD - Game Design Document - Módulo 1 - Inteli



## Metamorfose

#### [Davi Abreu da Silveira](https://www.linkedin.com/in/davi-abreu-da-silveira-706323290/)
#### [Fernando Soares de Oliveira](https://www.linkedin.com/in/fernando-soares-de-oliveira-081092292/)
#### [Leonardo Ogata Pedrosa](https://www.linkedin.com/in/leonardo-ogata-983b032b5/)
#### [Mateus Martins Silveira Pretti](https://www.linkedin.com/in/mateus-martins-pretti-03ba952b4/)
#### [Murilo Couto Oliveira](https://www.linkedin.com/in/murilo-couto-oliveira/)
#### [Renan Sabino dos Reis](https://www.linkedin.com/in/renan-reis-483a10289/)
#### [Vinicius Gomes Ibiapina](https://www.linkedin.com/in/vinicius-ibiapina-90407328b/)




## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução (sprints 1 e 4)

## 1.1. Escopo do Projeto

### 1.1.1. Contexto da indústria (sprints 1 e 4)


&nbsp;&nbsp;&nbsp;&nbsp; A contextualização da indústria é fundamental para as empresas entenderem o ambiente em que operam, incluindo análise de tendências de mercado, concorrência, avanços tecnológicos e condições econômicas. Para a Meta, anteriormente conhecida como Facebook, essa compreensão é crucial, pois sua operação eficaz e de inovação contínua dependende de uma rede diversificada de fornecedores, parceiros e colaboradores.

&nbsp;&nbsp;&nbsp;&nbsp; Os fornecedores desempenham um papel essencial no dia a dia da Meta, fornecendo desde hardware e software até serviços de infraestrutura de data center. Além disso, parcerias com empresas de publicidade, desenvolvedores de aplicativos e organizações sem fins lucrativos contribuem significativamente para a operação e a imagem da marca da Meta.

&nbsp;&nbsp;&nbsp;&nbsp; No entanto, a Meta enfrenta uma concorrência acirrada em diversos mercados globais. Enquanto o WeChat domina o mercado chinês devido a restrições governamentais, o Line é uma força no Japão. Nos Estados Unidos, concorrentes como Snapchat, Telegram, Discord e TikTok desafiam a Meta, demonstrando a dinâmica e competitividade do setor de tecnologia e comunicação digital ¹.

&nbsp;&nbsp;&nbsp;&nbsp; A Meta, está atenta às tendências globais que moldam o cenário tecnológico e empresarial. A volatilidade geopolítica, com conflitos regionais e demandas sociais crescentes, define a narrativa de 2024. Além disso, a convergência de realidades virtuais e físicas no metaverso está transformando indústrias e redefinindo interações com a tecnologia. Energias sustentáveis, como as renováveis, ultrapassarão um terço da geração global de energia, marcando um ponto de virada na luta contra as mudanças climáticas. A saúde digital, cidades inteligentes e blockchain também são tendências significativas. Esses fatores moldarão o futuro da Meta e de outras empresas, impulsionando a inovação e a adaptação contínua. Além disso, a empresa está comprometida com a inclusão e a diversidade no mercado de trabalho ², visando contribuir positivamente para o avanço tecnológico e o bem-estar das pessoas ³. Essa abordagem reflete a estratégia da Meta em relação à inovação, expansão de mercado e diversidade no local de trabalho.


### 1.1.2. Análise SWOT (sprints 1 e 4)

&nbsp;&nbsp;&nbsp;&nbsp; A análise SWOT, também conhecida como matriz FOFA, avalia fatores internos e externos de uma empresa ou projeto. Ela divide-se em quatro componentes: Forças, Fraquezas, Oportunidades e Ameaças. As forças diferenciam a organização, gerando valor, enquanto as fraquezas limitam o potencial. No ambiente externo, oportunidades são situações favoráveis para crescimento, e ameaças são desafios que podem comprometer o desempenho. A análise SWOT permite estratégias eficazes e antecipação de desafios no contexto empresarial e tecnológico. No contexto da Meta, conduzimos uma extensa pesquisa, culminando nos seguintes resultados:

## FORÇAS (S): 
- Grande base de usuários

&nbsp;&nbsp;&nbsp;&nbsp; A Meta possui uma enorme base de usuários que usam suas redes sociais. No Brasil, cerca de 93,4% da população com idade entre 16 e 64 anos utilizam o WhatsApp, plataforma adquirida pela Meta em 2014, o que equivale a aproximadamente 169 milhões de usuários. Além disso, o app contou com mais de 541 milhões de downloads, sendo o quarto 'app' mais baixado do mundo. A posição parece não ser tão boa, mas o que surpreende é que dos três apps que aparecem à sua frente, dois são da Meta. Em terceiro lugar está o Facebook, que mesmo após tantos anos de sua ascensão continua atraindo muitos novos usuários. No final do ano de 2023, a equipe da Meta tornou pública a informação de que o Facebook contava diariamente com cerca de 2,11 bilhões de usuários ativos. Logo depois do Facebook temos o Instagram, ocupando o segundo lugar dos apps mais baixados em 2023. O Instagram contou com cerca de 829 milhões de downloads, e com mais de dois bilhões de usuários ativos diariamente. Com isso, sua base de usuários é sem dúvidas uma das maiores da internet, ganhando até mesmo do gigante TikTok que aparece em ascensão, porém conquistando 'apenas' cerca de 1 bilhão de usuários ativos diariamente. 

- Grande capacidade de inovação

&nbsp;&nbsp;&nbsp;&nbsp; A Meta, antes mesmo de ser Meta, já foi capaz de revolucionar a maneira como enxergávamos as redes sociais. Antes do Facebook, as redes sociais tinham um conceito muito diferente do que imaginamos hoje. Anos depois eles revolucionaram novamente com a compra do Instagram, por aproximadamente 1 bilhão de dólares. Recentemente nos foi apresentado o Metaverso, sem dúvidas a maior inovação da empresa desde então. Sua capacidade de inovação pode ser observada também pelo sucesso de todas as suas novas funcionalidades que são implementadas em seus apps. 


- Vantagem competitiva

&nbsp;&nbsp;&nbsp;&nbsp; A Meta oferece uma variedade de serviços integrados que atendem às diferentes necessidades e preferências dos usuários. Uma mesma empresa se tornou capaz de oferecer: redes sociais, mensagens, realidade virtual e aumentada, negócios e publicidade. Alguns desses elementos, como as redes sociais e os negócios e publicidade, são apresentados em conjunto.

- Boa cultura organizacional

&nbsp;&nbsp;&nbsp;&nbsp; A cultura organizacional da Meta estimula a criatividade, a colaboração e a experimentação, atraindo talentos de diversas áreas e origens. No caso da Meta, essa cultura parece ser baseada em cinco princípios: dar voz às pessoas, construir conexões e comunidade, atender a todos, promover oportunidades e proteger seus usuários. 

- Forte presença no mercado publicitário

&nbsp;&nbsp;&nbsp;&nbsp; A Meta tem um forte nome no mercado publicitário. Espera-se que o Instagram seja responsável por movimentar cerca de 9,1 bilhões de dólares em anúncios no ano de 2024. O conhecido tráfego pago é acessível, você pode anunciar a sua marca por apenas U$1,00 (R$4,95 no dia em que escrevo isso), o que aumenta ainda mais a gama de personas que podem anunciar.

## FRAQUEZAS:
- Problemas legais

&nbsp;&nbsp;&nbsp;&nbsp; A Meta enfrenta diversos problemas legais, regulatórios e éticos em diversos países, relacionados à privacidade, segurança, concorrência, conteúdo nocivo, desinformação e manipulação de dados dos usuários. Em dezembro de 2022 a Meta concordou em pagar cerca de US$ 725 milhões para encerrar um processo que acusava a empresa de permitir que a Cambridge Analytica e outras empresas de análise de dados tivessem acesso aos dados privados de seus usuários.

- Má reputação

&nbsp;&nbsp;&nbsp;&nbsp; Para muitos usuários a Meta é uma empresa que abusa de seu poder de mercado. Grande parte dessa má reputação da empresa é proveniente dos problemas legais, citados anteriormente, mas recentemente o seu algoritmo passou a também ser alvo de críticas. A Meta foi acusada de fornecer um algoritmo nocivo para a saúde mental de seus usuários, divulgando de maneira desproporcional a padronização da beleza.

- Curto ciclo de vida de seus produtos

&nbsp;&nbsp;&nbsp;&nbsp; A tecnologia está em constante evolução, e os produtos se tornam obsoletos muito rapidamente. A empresa já sofreu com esse curto ciclo de vida de seus produtos. O Facebook, embora ainda conte com muitos usuários, deixou de atrair o público mais jovem, tornando-se um produto nichado, consequentemente perdendo um grande público.

- Desafios na moderação de seus anúncios

&nbsp;&nbsp;&nbsp;&nbsp; Com o sucesso crescente do tráfego pago, as redes sociais se mostraram uma enorme oportunidade para aumentar as vendas. No entanto, essa visibilidade também se mostrou uma grande oportunidade para golpistas. A moderação dos anúncios do Instagram parece não funcionar, e cada vez mais os anúncios maliciosos tomam conta das redes sociais da Meta. Um grande exemplo disso são as casas de apostas virtuais, que, embora ainda sejam contra as leis brasileiras, continuam operando a todo vapor com milhares de promessas falsas. Além das propagandas pagas ao próprio Instagram, algumas dessas propagandas são pagas aos influencers, que são visitados diariamente por milhares de usuários.

- Dependência de publicidade

&nbsp;&nbsp;&nbsp;&nbsp; A Meta depende fortemente da publicidade em suas plataformas, já que seus aplicativos são gratuitos e não possuem muitas opções de compras integradas ao app. 

## AMEAÇAS:
- Maior regulamentação e fiscalização

&nbsp;&nbsp;&nbsp;&nbsp; Os aplicativos da Meta possuem um enorme banco de dados com inúmeras informações de seus usuários. Essas informações são sensíveis e alguns governos podem enxergar isso como uma ameaça aos seus cidadãos. Em caso de qualquer alteração nessas regulamentações, as plataformas da Meta podem sofrer restrições e deixarem de circular em determinadas regiões até que adequem suas diretrizes para a região.

- Forte concorrência

&nbsp;&nbsp;&nbsp;&nbsp; Embora tenha plataformas consolidadas no mercado, a concorrência aumenta a cada dia e novas tendências começam a surgir. É importante mencionar que tudo aquilo que rouba a atenção do usuário pode ser uma concorrente para as redes sociais em geral, mas algo ainda mais perigoso parece se aproximar: novas tendências de redes sociais. Em 2020, a Meta viu suas plataformas serem deixadas de lado, enquanto milhares de novos usuários passavam a gastar seus tempos de ócio no TikTok. Com um modelo de vídeos curtos, o TikTok passou a ditar um novo segmento dentro das plataformas. Como o TikTok a cada dia se tornava uma ameaça mais real, a Meta decidiu integrar o modelo de vídeos curtos no Instagram, com o Reels. Embora a adição seja um sucesso, o TikTok continua assombrando a empresa. 

- Boicotes

&nbsp;&nbsp;&nbsp;&nbsp; Diante desses escândalos de privacidade, a Meta pode virar alvo de boicote e perder grande parte de seus usuários para outras plataformas. Mas há algo ainda mais suscetível a boicotes do que essa questão de privacidade: o Metaverso. Algo muito semelhante vem acontecendo recentemente com as inteligências artificiais de texto e imagens, que foram alvo de diversos protestos importantes.  

- Bloqueador de anúncios 

&nbsp;&nbsp;&nbsp;&nbsp; Com grande parte de sua renda tendo origem em propagandas, os bloqueadores de anúncio surgem como uma grande ameaça para a Meta. Em geral, os anunciantes só anunciam se tiverem certeza de que há chances de converter aqueles anúncios em vendas. Essa conversão de anúncios em vendas se torna ineficaz com o uso dos bloqueadores de anúncio.

- Flutuações econômicas

&nbsp;&nbsp;&nbsp;&nbsp; A Meta é sensível a flutuações econômicas globais que podem afetar os orçamentos de publicidade, o poder de compra dos usuários e a estabilidade financeira das empresas que anunciam em suas plataformas. Por depender de publicidade para gerar receita, qualquer grande alteração na economia de um país pode resultar em prejuízo para a Meta. 

## OPORTUNIDADES: 
- Educação online e trabalho remoto

&nbsp;&nbsp;&nbsp;&nbsp; Com o aumento do ensino à distância e do trabalho remoto, a Meta poderia explorar oportunidades para desenvolver ou adquirir plataformas de aprendizado online e ferramentas de colaboração remota, alinhando as mudanças nas tendências de trabalho e educação com suas ofertas de produtos. Vale mencionar que, desde o surto global de COVID-19 em meados de 2020, o mundo passou por uma enorme revolução. Mesmo com as salas de aula presenciais novamente cheias de alunos, muitos professores continuam utilizando plataformas online para a organização de suas tarefas. 

- Mercados emergentes

&nbsp;&nbsp;&nbsp;&nbsp; A Meta pode explorar oportunidades de crescimento em mercados emergentes, onde o acesso à internet ainda está em estágios iniciais e, consequentemente, a adoção das redes sociais está crescendo. Implementar os idiomas desses países pode significar uma disparada à frente dos concorrentes, e captar esses novos usuários pode impulsionar de forma significativa a base de usuários da empresa.

- Expandir suas plataformas

&nbsp;&nbsp;&nbsp;&nbsp; Com tantos novos segmentos surgindo, a Meta poderia expandir suas marcas já consolidadas no mercado e integrar alguns desses segmentos dentro de suas plataformas. Por exemplo: o Tinder é um aplicativo muito forte de namoro, por que não integrar algo semelhante ao Facebook? 

- Parcerias

&nbsp;&nbsp;&nbsp;&nbsp; Com tanta expectativa no futuro do Metaverso, a Meta pode propor parcerias com empresas de diferentes segmentos e trazê-las não apenas para o Metaverso, mas também integrá-las às demais plataformas da Meta. Essas colaborações estratégicas com outras empresas podem abrir novas oportunidades para a Meta. Parcerias em áreas como entretenimento, educação ou saúde digital podem ampliar seu alcance e oferecer experiências mais abrangentes aos usuários.

- Integração de Pagamentos P2P

&nbsp;&nbsp;&nbsp;&nbsp; Facilitar transações financeiras entre usuários em suas plataformas pode ser uma excelente oportunidade. A Meta pode explorar a integração de sistemas de pagamento P2P e tornar o envio de dinheiro mais simples e conveniente. Essa funcionalidade inclusive já foi implementada no WhatsApp, mas ainda necessita de muita burocracia para ser realizada.

<div align="center">
<sub>Figura 1 - Análise SWOT do Projeto</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/SWOT.png">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

### 1.1.3. Descrição da Solução Desenvolvida (sprints 1 e 4)

### Problema a ser resolvido
&nbsp;&nbsp;&nbsp;&nbsp; Há necessidade de criar uma ferramenta que oriente e facilite a compreensão de todos os passos da jornada de contratação de um fornecedor para colaboradores META. Desde o Sourcing (Primeiro Contato) até o Payment (Pagamento). Esse problema a ser resolvido vem por parte da META, e nós G05 da T14 iremos trabalhar para solução disso através de um jogo.

### Dados disponíveis
&nbsp;&nbsp;&nbsp;&nbsp; Como dados disponíveis temas as tecnologias que usamos no desenvolvimento do game: CSS; HTML5; JS; GitHub; VS Code; Phaser. Essas tecnologias são as quais a META e o INTELI definiram para que utilizássemos e nos aprimorarmos durante esse módulo (1) e consequentemente para a confecção do projeto.

### Macro do game
&nbsp;&nbsp;&nbsp;&nbsp; Jogo baseado em decisão traz também um senso de progressão conforme o conhecimento do jogador aumenta a respeito do processo de contratação, haverá relação entre causa e efeito da ação rápida. O jogo não contará em banco de dados e todo o seu conteúdo ficará restrito entre grupo e meta, sua duração será de aproximadamente 20 minutos e como compatibilidade para uso teremos: Celular e computadores, contando com versões em Inglês, Português, entre outras linguagens. Além de que utilizaremos recursos da META dentro do jogo, como por exemplo a paleta de cores, referências a aplicativos da empresa, pessoas envolvidas no processo de contratação, local de trabalho dos funcionários(público alvo), entre outros recursos.

### Solução proposta 
&nbsp;&nbsp;&nbsp;&nbsp; Desenvolver um jogo que simula o processo de seleção de  fornecedores para a META, passando por cada etapa do processo de contratação de um parceiro e avaliando se o potencial parceiro atende aos  critérios da META, com base nas suas estatísticas como diversidade e ética. Visando a guia do funcionário pelo processo de uma forma dinâmica e gamificada.
    
### Como a solução proposta deve ser utilizada?
&nbsp;&nbsp;&nbsp;&nbsp; Os colaboradores deverão utilizar o jogo como uma ferramenta de orientação sobre o procedimento de contratação de fornecedores, visando desmistificar a concepção de que se trata de um processo complexo e de difícil  aprendizagem. Durante o jogo, os colaboradores serão conduzidos e fornecidos  com dicas sobre como devem lidar com esse processo, proporcionando, assim, uma maior facilidade no seu aprendizado.
### Benefícios esperados:
&nbsp;&nbsp;&nbsp;&nbsp; Os benefícios esperados se dão pelo aumento do engajamento dos funcionários com a empresa e suas mecânicas de funcionamento, além disso, facilitar o entendimento sobre o processo de contratação. Também esperamos que por meio desse jogo aumente as oportunidades de contratação de fornecedores sob o contexto de diversidade. Portanto, o jogo na nossa concepção deve exterminar as dúvidas referentes ao processo.

### Qual será o critério de sucesso?
&nbsp;&nbsp;&nbsp;&nbsp; Os critérios para definição de sucesso do nosso projeto poderá ser definido a partir de feedbacks da META e da equipe de profissionais do INTELI, além disso, atender ao que foi proposto e sanar quaisquer dúvidas dos colaboradores a respeito do processo de contratação de fornecedores. Junto a isso gostaríamos de ver a maior promoção de oportunidades a fornecedores diversos dentro da META, o que definiria de fato o sucesso do nosso projeto.

### 1.1.4. Proposta de Valor (sprints 1 e 4)

&nbsp;&nbsp;&nbsp;&nbsp; O Value Proposition Canvas é uma ferramenta de marketing que ajuda a definir perfis de clientes, propostas de valor e ajustar a oferta de produtos com base nas necessidades dos clientes. O Canvas é dividido em dois blocos: Perfil do Cliente e Proposta de Valor. O bloco de Perfil do Cliente ajuda a identificar os trabalhos que o cliente precisa realizar, as dores que ele enfrenta e os ganhos que ele espera obter. O bloco de Proposta de Valor ajuda a definir os componentes mais importantes da oferta, como aliviar a dor e criar ganhos para os clientes.

<div align="center">
<sub>Figura 2 - Canvas da Proposta de Valor do Projeto</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/92562887-e51f-4ab1-82b4-89572ead5159">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

### Contextualização:

&nbsp;&nbsp;&nbsp;&nbsp; O Value Proposition Canvas é fundamental para um modelo de negócios. Auxilia o negócio na tomada de decisão e posicionamento do produto. É mais do que  uma simples representação gráfica dos desejos do cliente. As empresas podem alinhar suas estratégias de acordo com as necessidades do cliente. Isso pode ajudar a produzir um produto que os clientes desejam. Alguns benefícios que os clientes podem ter quando se utiliza o Value Proposition Canvas são: 

- Planejamento Focado

&nbsp;&nbsp;&nbsp;&nbsp; Com novas ideias surgindo a cada momento, é fácil perder o foco nos valores essenciais. Como resultado, o produto desenvolvido não atende às expectativas do cliente. Um Value Proposition Canvas atua como um guia visual, ele garante uma abordagem direcionada para o desenvolvimento de um produto de alta demanda.

- Melhora-se o alcance do marketing

&nbsp;&nbsp;&nbsp;&nbsp; O lançamento de um novo produto envolve muito esforço de marketing e branding. Envolve informar aos clientes como a compra do produto atende às suas necessidades, isso ajuda a construir uma imagem de marca forte na mente dos consumidores, logo os clientes passam a reconhecer a marca pela qualidade e serviço prestado. Um Canvas de Proposta de Valor identifica as necessidades do cliente e desenvolve um plano de ação para isso. Com isso garantido, a promoção e a propaganda captam a atenção do cliente com facilidade.

- Forte envolvimento do cliente

&nbsp;&nbsp;&nbsp;&nbsp; A orientação é a chave para envolver os clientes com sua marca e produto. Através desta abordagem, a satisfação do cliente é o fator mais importante no desenvolvimento do produto. Um Canvas de Proposta de Valor une a identificação e o atendimento de necessidades. A vantagem dessa estrutura é que ela permite que você se concentre nos elementos que os clientes mais valorizam.

- Praticidade e simplicidade

&nbsp;&nbsp;&nbsp;&nbsp; O Customer Value Canvas oferece uma visão geral simplificada da funcionalidade do negócio. A análise da estratégia e do desempenho do produto torna-se abrangente, mas simples. Além de ter um fácil entendimento dos significados e tópicos.

&nbsp;&nbsp;&nbsp;&nbsp; O círculo representa o perfil do cliente, sendo dividido em três partes: trabalhos a serem feitos, dores e ganhos. Este trio permite que você pense na perspectiva do usuário final ao definir tarefas, desafios e desejos que ele terá. Já o quadrado na tela representa o mapa da proposta de valor. Assim como o círculo, também está dividido em três partes. Cada parte está relacionada à seção relevante do perfil do cliente. O foco aqui é mapear as características, funcionalidades e benefícios do produto que atraem clientes e atendem às suas necessidades do círculo.

### 1.1.5. Matriz de Riscos (sprints 1 e 4)

&nbsp;&nbsp;&nbsp;&nbsp; Uma matriz de riscos é uma ferramenta fundamental utilizada na gestão de projetos e no gerenciamento de riscos. Ela é uma representação visual que ajuda a identificar, classificar e avaliar os riscos que um projeto pode enfrentar. Geralmente, uma matriz de riscos organiza os riscos de acordo com sua probabilidade de ocorrência e seu impacto potencial, criando assim uma visão clara dos principais desafios que podem afetar o sucesso do projeto. Essa ferramenta permite que as equipes de projeto priorizem seus esforços de redução e desenvolvam estratégias para lidar eficazmente com os riscos identificados. Em resumo, a matriz de riscos é uma peça central na tomada de decisões informadas e na garantia de que os projetos estejam preparados para enfrentar e superar obstáculos potenciais.

<div align="center">
<sub>Figura 3 - Matriz de Risco do Projeto</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/676790e2-7fd1-4f48-a2ad-a63130338735">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp; Conforme a avaliação dos riscos com a ferramenta da Matriz, segue a análise da vertente e o plano de ação para os mesmos:

- Problemas Técnicos
  
&nbsp;&nbsp;&nbsp;&nbsp; Os problemas técnicos englobam diversos elementos, tais como, queda de energia local, internet de má qualidade, entre outras. Esta problemática com certeza atrasaria os planos do projeto, mas não é de grande ameaça, pois geralmente essas vertentes se resolvem em pouco tempo. A resolução da ameaça seria o foco dos outros membros do grupo no processo onde  o outro colaborador do time está incapacitado de agir.

- Atraso nas reuniões

&nbsp;&nbsp;&nbsp;&nbsp; Considerando o movimento da cidade de São Paulo, é necessário listar que um possível atraso nas reuniões do projeto tem chance de ocorrer. Porém, este risco é rapidamente resolvível, pois os membros que participarem poderiam facilmente mandar em um meio de comunicação (Slack, Whatsapp, etc) as decisões dos participantes naquela reunião.

- Acontecimentos de bugs

&nbsp;&nbsp;&nbsp;&nbsp; Considerando que a equipe ainda está sobre aprendizado na questão da programação, é notável que alguns bugs podem acontecer, mas é muito provável que os mesmos não influenciem na jogabilidade do jogo. Uma medida para que isso pare de ocorrer, é o teste constante do jogo e o reporte de quando acontecer de se notar um bug.

- Problemas com saúde

&nbsp;&nbsp;&nbsp;&nbsp; No avanço do tempo é comum o acontecimento de problemas envolvendo a saúde, mas assim como foi classificado, esta vertente se classifica como uma ameaça moderada, pois assim como os problemas técnicos a soluçâo seria o "acobertamento" do membro afetado.

- Desviamento dos Ideais da empresa

&nbsp;&nbsp;&nbsp;&nbsp; Conforme o avanço do desenvolvimento do jogo, é possível ocorrer algum desviamento dos ideais da Meta em algum elemento no game. Podemos tomar como exemplo, uma competitividade desnecessária ou como citado no encontro do dia 09/02, se adicionarmos alguma figura da Meta no jogo e passarmos a ele algum conceito diferente do que a empresa quer. O movimento que podemos tomar quanto a isso, seria a constante comunicação com os colaboradores, para que acompanhem as nossas ideias conforme a adição de elementos no jogo.

- Erro no código

&nbsp;&nbsp;&nbsp;&nbsp; Ponderando novamente o ponto de que a equipe está em processo de aprendizado, há chances altas de ocorrer erros nos códigos que podem danificar a jogabilidade e experiência do usuário no jogo. O plano de ação é novamente comunicar aos integrantes quando reportarem erros e o acompanhamento da solução dessa vertente por partes de todos os membros, para que os mesmos aprendam com os erros.

- Jogo não cumprir com as expectativas

&nbsp;&nbsp;&nbsp;&nbsp; Na perspectiva do tópico anterior, o nosso contato inicial com a programação e design pode fazer com que o jogo não cumpra as expectativas em na questão de experiência do usuário (UX), podemos tomar como exemplo artes do jogo confusas e má fluidez dos comandos dados pelo jogador. Uma solução seria a requisição de um auxílio externo, como o orientador Marcelo, mas visando ainda que este auxílio também é dado a outros grupos enão só ao nosso.

- Tempo não suficiente

&nbsp;&nbsp;&nbsp;&nbsp; Visto que o o projeto e o aprendizado dos alunos caminham juntos, é possível notar que o tempo dado pela faculdade deve ser manipulado de forma eficiente, e que em meio a tensão da entrega do produto, pode ser que ocorra uma falta de tempo para um desenvolvimento melhor do projeto. O passo tomado para que essa problemática seja anulada, deve ser o planejamento prévio do plano de ação do grupo em visa do desenvolvimento do projeto.

- Atraso devido a dificuldades iniciais

&nbsp;&nbsp;&nbsp;&nbsp; Retomando o contexto do aprendizado, é muito provável que ocorra atraso nos planos devido ao primeiro contato com as ferramentas de programação, assim como antes citado. A solução seria a mudança de foco, antes na entrega do projeto, agora no exercício de aprender.

## 1.2. Requisitos do Projeto (sprints 1 e 2)

&nbsp;&nbsp;&nbsp;&nbsp; Os requisitos de um projeto são as especificações e condições necessárias para que o projeto seja concebido, desenvolvido e implementado com sucesso. Eles formam a base para o entendimento mútuo entre as partes envolvidas no projeto, incluindo clientes, equipe de desenvolvimento e demais stakeholders. Os requisitos são essenciais para guiar todas as fases do ciclo de vida do projeto, desde a sua concepção até a entrega final.

<div align="center">
<sub>Tabela 01 - Requisito Funcional 01</sub>
</div>

Número | Requisito
--- | ---
1 | O jogo deve ser desenvolvido para plataformas mobile
2 | O jogo deve possuir uma tela de pause para o jogador poder acessar as configurações do jogo
3 | O jogo deve apresentar interações fora da história principal para deixar o jogador imerso na história
4 | O jogo possuirá dialogos que guiem o jogador pelo processo de contratação de um novo fornecedor, explicando os valores que a Meta possui
5 | O jogo deve possuir músicas que ambientem o jogador dependendo do cenário e situação
6 | O jogo deve possuir diferentes ferramentas englobem o processo de contratação
7 | O jogo deve possuir uma forma de o player compartilhar suas conquistas no jogo, engajando e incentivando outros colaboradores a jogarem
8 | O jogo deve ter uma mecânica de progressão para mostrar ao jogador sua evolução
9 | O jogo deve ter a tradução para inglês


<div align="center">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

## 1.3. Público-alvo do Projeto (sprint 2)

&nbsp;&nbsp;&nbsp;&nbsp; O público alvo do projeto se refere a quem ele é destinado, o “target” do projeto. Sendo assim, como nosso atual parceiro é a Meta, pensando macroscopicamente o projeto se dirige aos funcionários de tal empresa, uma vez que a proposta apresentada foi de que ele serviria para auxiliar e engajar os colaboradores a conhecerem mais do processo de contratação de um fornecedor. 

&nbsp;&nbsp;&nbsp;&nbsp; Pensando no público alvo de forma mais detalhada, tomando como base um formulário feito por nossa turma e enviado para os funcionários da Meta responderem, podemos pensar em nossos futuros jogadores como, em primeiro lugar, pessoas que trabalham em diferentes áreas da empresa, desde o financeiro até o time de sourcing, ou seja, uma equipe diversificada no quesito da função que exercem.

&nbsp;&nbsp;&nbsp;&nbsp; Podemos citar também as claras diferenças de forma de analisar dados e maneira de pensar, visto que as respostas ao formulário para questões que tinham como tópico principal as características que eram sublimes para a contratação de um fornecedor e as principais dificuldades enfrentadas para tal foram bem diferentes.

&nbsp;&nbsp;&nbsp;&nbsp; Falando agora sobre a experiência do público alvo com jogos, elas também foram bem diversificadas, englobando desde pessoas que jogam todos os dias até pessoas que não entendem/conhecem nada do assunto. Mas apesar disso, os perfis para jogos se repetiram em todas as respostas, sendo os respondentes se identificaram com os perfis: Conquistadores, ou seja, gostam de acumular conteúdo e superar as metas que o ambiente proporciona, e versáteis, ou seja, jogam diferentes tipos de jogos.

&nbsp;&nbsp;&nbsp;&nbsp; Em conclusão, é possível perceber que apesar de bem diferentes em alguns aspectos, o perfil dos colaboradores se encontra em pontos extremamente importantes para o desenvolvimento de jogos, como por exemplo na questão do perfil de achiever, que pode ser explorado para gerar maior atração pelo game.Sendo assim, as informações coletadas foram de extrema importância e poderão ser fundamentais para um projeto de sucesso.


# <a name="c2"></a>2. Visão Geral do Jogo (sprint 2)

## 2.1. Objetivos do Jogo (sprint 2)
&nbsp;&nbsp;&nbsp;&nbsp; Em cada etapa, o jogador será introduzido a uma nova mecânica que servirá como suporte na avaliação de fornecedores. Por meio dessas mecânicas, espera-se que o jogador seja capaz de discernir as qualidades e os defeitos dos fornecedores. Caso o jogador faça esta distinção corretamente , o jogador poderá avançar para a próxima fase.

<div align="center">
<sub>Figura 4 - Mecânica 1</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/mecânica_1.1.jpeg">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub>Figura 5 - Mecânica 2</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/mecânica_1.2.jpeg">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub>Figura 6 - Mecânica 3</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/mecânica_1.3.jpeg">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub>Figura 7 - Mecânica 4</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/mecânica_1.4.jpeg">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp; Na mecânica das fotos acima, os jogadores devem examinar as estatísticas de uma empresa. Se as estatísticas forem desfavoráveis, devem ser descartadas para a lixeira; caso contrário, devem ser movidas para o sinal de correto. Em caso de acerto, uma mensagem de congratulação é exibida, enquanto em caso de erro, uma mensagem de erro é apresentada aos participantes. Pensamos nessa mecânica como uma maneira simples e divertida de ensinar aos funcionários da Meta como funciona o processo de análise de histórico dos possíveis fornecedores, para assim transmitir ao jogador os valores que a Meta busca em seus fornecedores de uma forma leve de se entender.
## 2.2. Características do Jogo (sprint 2)

### 2.2.1. Gênero do Jogo (sprint 2)
Nosso jogo retrata alguns gêneros e como principal deles: 
-Simulação⁴, já que nele nós almejamos emular o mais próximo possível da realidade, como por exemplo o cenário onde se passa a maior parte do jogo sendo onde o funcionário trabalha e aplicará o conhecimento adquirido durante o game. 
-Estratégia⁵, já que requer habilidade, planejamento e conhecimento para conclusão das fases do jogo. 
-Aventura⁶, pois o jogador deverá guiar o personagem pelo mapa para realizar as tarefas designadas a ele durante a gameplay.
-Educação, devido ao claro intuito de orientar os jogadores (funcionários) a respeito do processo de contratação de fornecedores.

### 2.2.2. Plataforma do Jogo (sprint 2)
O jogo estará disponível nas plataformas de desktops, smartphones e tablets, compatível com sistemas Web, Windows, MacOS, Android e iOS. O principal objetivo dessas diversas compatibilidades é tornar o jogo e, consequentemente, o conhecimento o mais acessível possível. 

### 2.2.3. Número de jogadores (sprint 2)
O game será jogado por apenas 1 jogador para que seja concluído dentro do tempo previsto de jogo e também para que possa maximizar o aprendizado a respeito do processo de contratação.

### 2.2.4. Títulos semelhantes e inspirações (sprint 2)
Temos como principais fontes de inspiração os jogos: Pokémon Ruby e Sapphire, Papers Please, Undertale e Stardew Valley, a principal aplicação dessas inspirações se dá na parte de design do jogo, mas também engloba inspirações na parte de mecânicas durante a gameplay.


### 2.2.5. Tempo estimado de jogo (sprint 5)
O jogo pode ser concluído entre 20 minutos e 30 minutos passando por todas as fases. Para que assim, atenda aos objetivos traçados pela META, assim como o tempo estimado pela própria em conjunto com a equipe.


# <a name="c3"></a>3. Game Design (sprints 2 e 3)

## 3.1. Enredo do Jogo (sprints 2 e 3)
   
No jogo Pocket Supplier, o jogador será conduzido ao prédio da empresa Meta, onde será guiado por Tata e Fabricinho ao longo do processo de contratação. Ambientado inteiramente no prédio da Meta, o jogo apresentará diversos níveis, cada um representado por diferentes escritórios. Durante o jogo, o jogador enfrentará desafios relacionados à contratação de fornecedores alinhados aos ideais da Meta. Ao longo das fases, o jogador será instruído em diferentes aspectos desse processo. Na fase final, o jogador enfrentará um grande desafio que incorporará todo o conhecimento adquirido ao longo do jogo.



## 3.2. Personagens (sprints 2 e 3)

### 3.2.1. Controláveis

&nbsp;&nbsp;&nbsp;&nbsp; Os personagens controláveis, são aqueles que o jogador consegue controlar usando comandos dados pelo próprio usuário, como por exemplo teclas do teclado, movimento e click do mouse, entre outros.

&nbsp;&nbsp;&nbsp;&nbsp; O Pocket Supplier possui até então dois “personagens controláveis”. Dentre eles estão o protagonista principal da história e as pastas arrastáveis, que dentro delas possuem os formulários dos fornecedores na fase 1 do jogo.

&nbsp;&nbsp;&nbsp;&nbsp; O protagonista principal da história do Pocket Supplier, inicialmente não possui nome, mas ao decorrer do jogo o usuário terá a oportunidade de colocar seu nome e seus pronomes “no personagem”, assim conectando mais o usuário com as mecânicas do “game”. Este personagem será utilizado em todas as cenas principais do jogo e sempre será a representação do colaborador da Meta no escritório da mesma.

<div align="center">
<sub>Figura 8</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/principal.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp; O outro elemento controlável do jogo são as pastas da fase 1. Esse elemento é utilizado para fazer a dinâmica da etapa, sendo possível arrastá-los para um lixo, recusando os formulários dos fornecedores dentro dessas pastas ou aceitando-os, levando eles para uma outra pasta na mesa. O formulário foi implementado com o intuito de o jogador conseguir entender, de forma intuitiva, se o usuário como um colaborador da Meta, deve sim ou não aceitar os históricos dos fornecedores dentro dessas pastas. 

<div align="center">
<sub>Figura 9</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/pastas.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp; Consequentemente, podemos concluir que na maioria dos jogos, os personagens e dinâmicas principais são elementos comandáveis, isto é, “personagens controláveis”. Em Pocket Supplier, foram tomados como inspiração os jogos, Pokémon, onde foram usados as ideias de o personagem principal ser controlável e suas oportunidades de escolha, e o “game” Papers Please, em que o personagem (que você não controla os movimentos, apenas o movimentos dos itens que ele usa) como um despachante aduaneiro, aceita ou recusa pessoas na fronteira do seu país. 

&nbsp;&nbsp;&nbsp;&nbsp; Portanto, nos jogos atuais, fica muito claro que são poucos os jogos que inovam em mecânica, os “games” não fogem do clichê, mas o diferencial deles são seus roteiros, imagens, sons e a maneira como eles lidam com essas mecânicas.



### 3.2.2. Non-Playable Characters (NPC)

&nbsp;&nbsp;&nbsp;&nbsp; Os personagens não jogáveis, ou em inglês Non-Playable Characters (NPC), são aqueles personagens que o jogador não tem nenhum controle direto sobre eles, isto é, elementos nos quais os comandos passados pelo usuário não influenciam exatamente nos NPC.

&nbsp;&nbsp;&nbsp;&nbsp; No Pocket Supplier os Non-Playable Characters, assim como os personagens controláveis, são apenas dois, sendo eles a “Tatá” e o “Fabrício”.

&nbsp;&nbsp;&nbsp;&nbsp; Nessa perspectiva, a Tatá foi inspirada na representante da Meta no projeto do Módulo 1 da turma 14, a Thaís. Nesse sentido, como uma homenagem a Thaís, a Tatá é a mentora do jogador no roteiro do jogo, oferecendo suporte e assistência ao usuário no decorrer da história. 

<div align="center">
<sub>Figura 10</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/tata.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp; O outro personagem não jogável é o Fabrício. Inspirado no mascote que passa ao usuário dicas de como manter sua privacidade no Facebook, o Fabrício é um dinossauro azul que apresenta ao jogador o escritório da Meta, introduzindo ele na empresa.

<div align="center">
<sub>Figura 11</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/dinossauro.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp; Portanto podemos concluir que, apesar dos personagens não controláveis parecerem não ter utilidade e importância, pelo fato que o jogador não tem influência, eles são muito importantes para a adição de elementos enriquecedores de enredo e implementam uma impressão de imersão do usuário no jogo.

### 3.2.3. Diversidade e Representatividade dos Personagens

&nbsp;&nbsp;&nbsp;&nbsp; A representatividade, no contexto sociocultural, refere-se à inclusão e visibilidade de diferentes grupos sociais, garantindo que suas identidades, experiências e perspectivas sejam reconhecidas e respeitadas. É um conceito fundamental para promover a igualdade e a diversidade, proporcionando um ambiente mais inclusivo e justo para todos.

&nbsp;&nbsp;&nbsp;&nbsp; Ao analisar os personagens do jogo Pocket Supplier, fica evidente a presença de representatividade. O protagonista, por exemplo, permite a escolha de pronomes, uma característica que não é comumente abordada na sociedade brasileira atual. Isso demonstra um esforço para incluir a comunidade LGBTQIA + e evidencia a falta de suporte que essa comunidade muitas vezes enfrenta.

&nbsp;&nbsp;&nbsp;&nbsp; Além disso, a personagem Tatá representa uma figura significativa na área de programação. Como uma mulher negra, ela enfrenta desafios adicionais em um campo que historicamente tem sido dominado por homens brancos. Sua presença no jogo destaca a importância da diversidade no mundo da tecnologia e destaca a necessidade de valorizar talentos diversos.

&nbsp;&nbsp;&nbsp;&nbsp; Em conclusão, a presença de representatividade nos personagens do jogo não apenas enriquece a experiência do jogador, mas também contribui para uma narrativa mais inclusiva e reflexiva. Promover a diversidade e a inclusão é essencial para construir uma sociedade mais justa e igualitária, onde todas as pessoas se sintam representadas e respeitadas.


## 3.3. Mundo do jogo (sprints 2 e 3)

### 3.3.1. Locações Principais e/ou Mapas (sprints 2 e 3)

*Descreva o ambiente do jogo, em que locais ele ocorre. Ilustre com imagens. Se houverem mapas, posicione-os aqui, descrevendo as áreas em acordo com o enredo. Se houverem fases, descreva-as também em acordo com o enredo (pode ser um jogo de uma fase só). Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

### 3.3.2. Navegação pelo mundo (sprints 2 e 3)

*Descreva como os personagens se movem no mundo criado e as relações entre as locações – como as áreas/fases são acessadas ou desbloqueadas, o que é necessário para serem acessadas etc. Utilize listas ou tabelas para organizar esta seção.*

### 3.3.3. Condições climáticas e temporais (sprints 2 e 3)

&nbsp;&nbsp;&nbsp;&nbsp; Em nosso jogo, o conceito de tempo é eliminado, permitindo que os jogadores explorem o espaço do personagem e cenários sem restrições temporais. Optamos por criar uma experiência imersiva, onde os jogadores podem mergulhar completamente na narrativa e nas mecânicas do jogo, dedicando-se ao máximo para entender o processo de contratação de um fornecedor, crucial para a Meta. Assim, essa abordagem proporciona uma curva de aprendizagem mais acentuada, uma vez que deixa o jogo com menos elementos, logo, mais fácil de entender, o que essencial e sublime na abordagem que estamos tendo para essa solução gamificada, alcançando também de maneira mais fácil o resultado esperado pelo parceiro, que é o entendimento do processo de contratação de fornecedores por parte dos funcionarios. 

&nbsp;&nbsp;&nbsp;&nbsp; Em síntese, o fato do jogo não ter condições temporais é reflexo do intuito do game, sendo importante para que o objetivo de sua criação seja alcançado com êxito.

### 3.3.4. Concept Art (sprint 2)

<div align="center">
<sub>Figura 12 - Mecânica para a etapa de privacy anda security</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/99ccb58f-44d8-4e46-96da-75eef20140fc">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

Nota: Concept demonstrando a dinâmica de análise da privaciade e segunraça de uma empresa X, que faz parte do processo de contratação da meta.

<div align="center">
<sub>Figura 13 - Mecânica para avaliar diferentes fornecedores</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/44d76d2f-ede4-497c-8ef4-8bb9818859c9">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

Nota:: Concept mostrando a comparação entre dois fornecedores, estilo uma batalha de pokemon.

<div align="center">
<sub>Figura 14 - Mecânica para a etapa de anticorrupção</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/0b2cf754-72d7-49a8-83a3-9da822a47a42">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

Nota: Concept demonstrando como funcionaria a fase de anti-corrupção do processo de contratação dos fornecedores, exemplificada pela tentativa de suborno de um dos colaboradores da meta por um fornecedor.


### 3.3.5. Trilha sonora (sprint 3)

*Descreva a trilha sonora do jogo, indicando quais músicas serão utilizadas no mundo e nas fases. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

*Exemplo de tabela*
\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | tema de abertura | tela de início | própria
2 | tema de combate | cena de combate com inimigos comuns | Hans Zimmer
3 | ... 

## 3.4. Inventário e Bestiário (sprint 3)

### 3.4.1. Inventário

&nbsp;&nbsp;&nbsp;&nbsp; Decidimos não incluir um sistema de inventário ou itens em nosso jogo, com o objetivo de proporcionar uma experiência centrada na narrativa e na jogabilidade. Optamos por simplificar a experiência do jogador, evitando distrações que poderiam prejudicar o envolvimento com a história e os desafios do jogo. 

### 3.4.2. Bestiário

&nbsp;&nbsp;&nbsp;&nbsp; Em nosso jogo, adotamos uma abordagem única e inovadora: não possuímos inimigos. Acreditamos que a jornada do jogador pode ser rica e envolvente sem a necessidade de violência. Em vez disso, focamos em desafios, obstáculos e instruções que surgem naturalmente no decorrer da narrativa, proporcionando uma experiência mais imersiva e reflexiva.

## 3.5. Gameflow (Diagrama de cenas) (sprint 2)

&nbsp;&nbsp;&nbsp;&nbsp; Um storyboard é uma ferramenta que permite visualizar uma história ou narrativa por uma sequência de ilustrações, ou imagens. É usado para planejar e comunicar como um projeto ou cena se desenvolverá, com uma visão mais detalhada. Um storyboard é importante porque ajuda a organizar as ideias, a identificar problemas, a economizar tempo e recursos, e a criar uma experiência melhor para o público. No contexto de desenvolvimento de jogos, o storyboard é crucial para definir mecânicas, personagens, cenários e desafios. Sua utilização proporciona testes e aprimoramentos conceituais antes da produção, contribuindo para uma experiência mais impactante para o público. Nosso storyboard de programação está disponível em melhor qualidade de imagem em: https://miro.com/app/board/uXjVNm9d3r4=/.

<div align="center">
<sub>Figura 15 - Storyboard </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/ecddc947-7bcb-4424-8fb2-384f5cbdbf35">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp; O nosso storyboard é a tradução resumida e completa dos conceitos fundamentais do nosso jogo. Com esta ferramenta, podemos antecipar desafios, configurar níveis e elaborar diálogos envolventes de maneira precisa, proporcionando uma visão detalhada e perspicaz dos aspectos visuais. Consolidamos uma base sólida que não apenas orienta, mas também potencializa a experiência do jogador ao integrar esses elementos. Dessa forma, o storyboard não só visualmente delineia nosso caminho, mas também atua como um guia crucial para garantir que todos os aspectos do jogo sejam planejados e refinados minuciosamente a fim de alcançar um produto final excepcional.

## 3.6. Regras do jogo (sprint 3)

*Descreva aqui as regras do seu jogo: objetivos/desafios, meios para se conseguir alcançar*

*Ex. O jogador deve pilotar o carro e conseguir terminar a corrida dentro de um minuto sem bater em nenhum obstáculo.*

*Ex. O jogador deve concluir a fase dentro do tempo, para obter uma estrela. Se além disso ele coletar todas as moedas, ganha mais uma estrela. E se além disso ele coletar os três medalhões espalhados, ganha mais uma estrela, totalizando três. Ao final do jogo, obtendo três estrelas em todas as fases, desbloqueia o mundo secreto.*  

## 3.7. Mecânicas do jogo (sprint 3)

*Descreva aqui as formas de controle e interação que o jogador tem sobre o jogo: quais os comandos disponíveis, quais combinações de comandos, e quais as ações consequentes desses comandos. Utilize listas ou tabelas para organizar esta seção.*

*Ex. Em um jogo de plataforma 2D para desktop, o jogador pode usar as teclas WASD para mecânicas de andar, mirar para cima, agachar, e as teclas JKL para atacar, correr, arremesar etc.*

*Ex. Em um jogo de puzzle para celular, o jogador pode tocar e arrastar sobre uma peça para movê-la sobre o tabuleiro, ou fazer um toque simples para rotacioná-la*

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo (sprint 1):

&nbsp;&nbsp;&nbsp;&nbsp; Atualmente, a primeira versão do jogo apresenta um cenário inicial situado em um ambiente de escritório, no qual o protagonista possui liberdade de movimento utilizando as teclas direcionais ou os controles WASD. Cada direção de movimento do personagem é acompanhada por uma animação correspondente, e a cena é acompanhada por uma trilha sonora ambiente. Até o momento, nossa equipe enfrentou principalmente desafios relacionados às colisões entre o personagem e os objetos presentes no cenário.

<div align="center">
<sub>Tabela 02 - Próximos passos do desenvolvimento</sub>
</div>

Número | Próximos passos no desenvolvimento do jogo
--- | ---
1| Solucionar os problemas de colisão entre o personagem e os objetos do cenário.
2| Introduzir novos personagens com os quais o protagonista poderá interagir.
3| Implementar diálogos entre os personagens.
4| Desenvolver um novo cenário para progredir para a próxima fase do jogo.

<div align="center">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>
<br></br>
Aqui estão alguns screenshots que ilustram a atual versão do jogo:
<br></br>
<div align="center">
<sub align="top">Figura 16 - Exemplos da versão do jogo </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/exemplo1.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>


<div align="center">
<sub align="top">Figura 17 - Exemplos da versão do jogo </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/exemplo2.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>



<div align="center">
<sub align="top">Figura 18 - Exemplos da versão do jogo </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/exemplo3.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>



<div align="center">
<sub align="top">Figura 19 - Exemplos da versão do jogo </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/exemplo4.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>


## 4.2. Desenvolvimento básico do jogo (sprint 2)

&nbsp;&nbsp;&nbsp;&nbsp; Atualmente, o jogo está equipado com um sistema de navegação que permite aos jogadores movimentarem-se utilizando tanto as teclas direcionais do teclado quanto as teclas WASD. Este sistema de controle é complementado por animações dinâmicas que correspondem à direção escolhida pelo jogador para sua locomoção.
<sub align="top">Figura 20 - Código da animação do personagem</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_anim_andar.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
<sub align="top">Figura 21 - Código do movimento do personagem</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_andar.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

nessa tela ainda serão adicionadas a s funcionalidades aos botões de seleção de lingua, ligar/desligar música, sair e botão de créditos
O jogo apresenta uma tela de menu principal que inclui um botão funcional "start". Nesta tela, ainda serão integradas funcionalidades aos botões de seleção de idioma, controle de música (ativar/desativar), opção de saída e um botão para acessar os créditos do jogo.
<sub align="top">Figura 22 - Código do menu</sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_menu.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

O jogo apresenta uma animação de introdução, na qual o personagem principal vai ao edifício da Meta, pega um elevador e é levado para o primeiro escritório do jogo
<sub align="top">Figura 23 - Código da animação introdutoria </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_intro.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

O jogo apresenta um escritório pelo qual o jogador pode andar, colidir com os objetos, e passar para a próxima cena do jogo
<sub align="top">Figura 24 - Código do escritório </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_escritorio.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

<sub align="top">Figura 25 - Código do escritório </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_escritorio1.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

<sub align="top">Figura 26 - Código do escritório </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_escritorio2.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

O jogo incorpora uma mecânica na qual formulários contendo informações sobre potenciais fornecedores são exibidos ao jogador. Este, por sua vez, deve examinar os formulários e movê-los para um envelope marcado com o símbolo da Meta se as informações forem favoráveis. No entanto, se as informações sobre o fornecedor forem desfavoráveis, o formulário deve ser descartado no lixeiro.
<sub align="top">Figura 27 - Código da mecânica </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_mecanica.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>

<sub align="top">Figura 28 - Código da mecânica </sub>
<img src="https://github.com/Inteli-College/2024-T0014-IN01-G05/blob/main/assets/codigo_mecanica1.jpeg" align="center" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>


## 4.3. Desenvolvimento intermediário do jogo (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da versão intermediária do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.4. Desenvolvimento final do MVP (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e planos futuros.*

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes (sprint 4)

## 5.1. Casos de Teste


&nbsp;&nbsp;&nbsp;&nbsp; Os casos de teste são conjuntos de condições, dados e passos específicos que são elaborados para verificar se um determinado software ou sistema atende aos requisitos estabelecidos. Eles são uma parte essencial do processo de teste de software, desempenhando um papel crucial na identificação de possíveis falhas e na garantia da qualidade do produto final.

&nbsp;&nbsp;&nbsp;&nbsp; Dessa forma, eles nos ajudarão a entregar o projeto bem-feito e completo, evitando erros de execução e código, garantindo uma maior satifação do nosso parceiro, a Meta.

<div align="center">
<sub>Tabela 03 - Requisito Funcional 01</sub>
</div>

\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | Usuário conectado com a internet | iniciar o jogo desde seu início | o jogo deve iniciar do menu inicial
2 | Menu inicial aberto | Verificar se as opções de configuração do jogo são exibidas | Os botões devem aparecer
3 | Observar a tela menu inicial | Clicar no botão start | O botão start aciona outra tela 
4 | Animação em vídeo deve aparecer | A animação deve aparecer completa | A animação deve chegar até o final
5 | A cena do escritório deve aparecer após o vídeo |Os comandos andar direita, esquerda, cima e baixo devem funcionar | O player deve andar
6 | Um botão deve aparecer no escritório |O player deve clicar no botão | O botão deve abrir outra cena
7 | A nova cena deve aparecer | As pastas devem ser arrastadas até a prancheta | A pasta se transformará em textos
8 | O jogador deve arrastar o texto da prancheta | A pasta deve aparecer novamente | O texto deve desaparecer
9 | O jogador deve arrastar o papel até o lixo ou a pasta | A resposta aparecerá como 'error' em caso de erro e "congratulations" em caso de acerto | A pasta deverá sumir em caso de acerto e em caso de erro deve aparecer novamente

<div align="center">
<sub>Material produzido pelos autores (2024)<sub>
</div>

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

*Descreva nesta seção as sessões de teste/entrevista com diferentes jogadores. Registre cada teste conforme o template a seguir.*

Nome | João Jonas (use nomes fictícios)
--- | ---
Já possuía experiência prévia com games? | sim, é um jogador casual
Conseguiu iniciar o jogo? | sim
Entendeu as regras e mecânicas do jogo? | entendeu as regras, mas sobre as mecânicas, apenas as essenciais, não explorou os comandos complexos
Conseguiu progredir no jogo? | sim, sem dificuldades  
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Gostou  de como o jogo vai ficando mais difícil ao longo do tempo sem deixar de ser divertido
O que poderia melhorar no jogo? | A responsividade do personagem aos controles, disse que havia um pouco de atraso desde o momento do comando até a resposta do personagem

### 5.2.2 Melhorias

*Descreva nesta seção um plano de melhorias sobre o jogo, com base nos resultados dos testes de jogabilidade*

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução do jogo atingiu os objetivos descritos na seção 1 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com plano de ações para serem implementadas no jogo. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para futuros desenvolvimentos.*

*Relacione também quaisquer ideias que o grupo tenha para melhorias futuras*

# <a name="c7"></a>7. Referências (sprint 5)

¹ DAS, Priona. Disponível em: https://www.feedough.com/facebook-competitors/. Acesso em: 1 mar. 2024 <br>

² META, Facebook. Disponível em: https://www.facebook.com/suppliers/diversity/mission-and-values/. Acesso em: 1 mar 2024 <br>

³ META, Facebook. Disponível em: https://sustainability.fb.com/responsible-supply-chain/. Acesso em: 1 mar 2024 <br>

⁴ Werneck, Vivi. Disponível em: https://tecnoblog.net/guias/10-jogos-de-simulacao-para-ps4-xbox-one-switch-e-pc/#:~:text=Jogos%20de%20simula%C3%A7%C3%A3o%20fazem%20parte,Voc%C3%AA%20gosta%20deste%20g%C3%AAnero%3F. Acesso em: 1 mar 2024 <br>

⁵ CARDOSO, Bruna. Disponível em: https://seugame.com/o-que-sao-jogos-de-estrategia/. Acesso em: 1 mar 2024 <br>

⁶ Cafagne, Tomás. Disponível em: http://www.larp.mae.usp.br/o-ultimo-banquete-em-herculano/o-que-sao-adventure-games/. Acesso em: 1 mar 2024 <br>

⁷ Gushiken, Amanda. Disponível em: https://g4educacao.com/portal/value-proposition-canvas. Acesso em: 29 fev 2024 <br>

# <a name="c8"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
