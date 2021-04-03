# Web app de relógio digital acessível.
Exemplo de aplicação acessível para a disciplina interface humano-computador

Link demo: https://brunosumar.github.io/Relogio-digital-acessivel/public/

# Desenvolvimento e análise de aplicação web focados em acessibilidade 

Alunos: Bruno Macedo, Bruno Sumar, Allan Martins.

## Introdução

O termo acessibilidade web refere-se a prática inclusiva de desenvolver sites com um foco especial para que possa ser utilizado por todas as pessoas que tenham deficiência ou não, quando um website qualquer é corretamente projetado e desenvolvido pensando neste paradigma, todos os usuários podem idealmente ter igual acesso à informação e funcionalidade.

Diversas pessoas com dificuldades necessitam da acessibilidade na Web para realizar suas próprias atividades, porém grande parte dos websites não tem uma preocupação extrema com a acessibilidade e isso traz um desconforto e frustração ao usuário com deficiência. Para que as pessoas usufruam e contribuam de forma eficaz com a Web, é necessário que surjam cada vez mais softwares e websites mais acessíveis e com maior preocupação à própria acessibilidade.

Este projeto tem como objetivo analisar uma aplicação web simples, um relógio digital, de forma a evidenciar práticas que os desenvolvedores podem adotar em suas próprias aplicações web. Tornando então suas aplicações  mais inclusivas, diminuindo a barreira de acesso de pessoas com deficiências visuais, motoras, de idade avançada e etc.


## Descrição da aplicação

A aplicação web desenvolvida para a demonstração das opções de acessibilidade foi a de um relógio digital. Ela conta com três funcionalidades principais: relógio, cronômetro e temporizador. 

A primeira e mais simples funcionalidade, o relógio, apenas exibe o horário, a data (dia, mês e ano) e a qual fuso horário as informações anteriores se referem. É possível escolher como o horário será apresentado pelo botão “exibir/ocultar segundos".

A segunda funcionalidade, o cronômetro, por sua vez faz a contagem de um intervalo de tempo especificado pelo usuário e pode ser controlado por três botões: “Iniciar”, “Parar” e “Zerar”, que alternam de estado entre habilitado e desabilitado.
 
A última funcionalidade, o temporizador, faz uma contagem regressiva e alerta o usuário quando ela chega ao fim, sendo o intervalo de tempo controlado por menus suspensos.

## Explicação das opções de acessibilidade

### Visão reduzida
Para que houvesse uma maior acessibilidade para pessoas com visão reduzida adicionamos em nossa página opções para que fosse possível tanto aumentar quanto diminuir o tamanho da fonte, de forma que fique mais fácil ler as informações. Para este mesmo público, foi adicionado um botão para alternar entre um modo de contraste que garante maior conforto e legibilidade à página. Estas duas funcionalidades são importantes pois permitem ao usuário customizar a página e escolher as opções que mais atendem às suas necessidades.

### Navegabilidade pelo teclado
Para usuários com capacidades motoras reduzidas adaptamos o site para que fosse navegável pelo teclado de forma confortável, para isso adicionamos um grande destaque ao elemento sobre foco do teclado.

Outra funcionalidade que ajuda usuários que navegam pelo teclado, foi a presença de links voltados à navegação da página, em todas as seções da página foram colocados links para voltar ao início, e no início existem links que levam a cada seção da página. Ìsso é especialmente útil para usuários que não possuem visão, pois desta forma não é preciso passar por todo o conteúdo da página para que se chegue no conteúdo desejado.

Também foi importante manter todos os elementos interativos da página dispostos de forma sequencial para não confundir quem esteja navegando a página pelo teclado.

Alguns elementos interativos mais complicados continuam mantendo sua acessibilidade, como por exemplo o menu dropdown que pode ser alcançado através da tecla <TAB>, seu menu pode ser expandido através da tecla <ESPAÇO>, seus itens podem ser navegados utilizando as setas, e um item pode ser selecionado usando a tecla <ENTER>. 

### Minimizando o número de imagens
Foi importante garantir o mínimo de elementos gráficos possíveis na página, pois eles acrescentam uma complexidade maior para usuários com deficiência visual, desta forma o único elemento gráfico que a página possui é um pequeno logo no início cuja propriedade alt tem a seguinte informação “Logo de relógio” informando de forma concisa o conteúdo do elemento. 

Tamanho dos elementos interativos e espaçamento entre eles
Garantimos que os botões, links e menus suspensos fossem grandes o suficiente, isso é importante para pessoas com visão reduzida e dificuldades motoras pois podem encontrar grande dificuldade ao tentar acertar um alvo muito pequeno com o mouse.

Um espaçamento entre os elementos também foi muito importante pois garante uma maior segurança de que ao errar um elemento interativo não irá acidentalmente acertar outro, o que poderia ser muito frustrante.

## Conclusão

Tendo em vista que a página é simples e foi desenvolvida dentro de pouco tempo utilizando técnicas que não eram familiares para os desenvolvedores, chega-se à conclusão que quando pensado no início do processo de criação, a acessibilidade pode ser implementada de forma eficaz, melhorando a experiência dos usuários como um todo.


### Referências

https://www.nngroup.com/reports/usability-guidelines-accessible-web-design/

https://www.nngroup.com/articles/accessible-design-for-users-with-disabilities/

https://www.nngroup.com/articles/alternative-interfaces-for-accessibility/

#### Fonte usada: DIGITAL-7 version 1.02


