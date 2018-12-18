---
id: admin-setup-inicial
title: Setup inicial
sidebar_label: Setup inicial
---

Serão descritos os passos necessários para fazer o setup inicial do i-Educar de 
forma que todos os seus recursos possam ser aproveitados.

## Configurar a instituição

Nesta seção apresentaremos como configurar os dados da instituição responsável 
pelas escolas da rede de ensino, que é a primeira configuração a ser realizada 
assim que a rede de ensino iniciar a utilização do i-Educar.

> **Localização:** Módulo Escola > Cadastros > Instituição

Nesse cadastro é possível configurar os dados do município como: nome, endereço, 
CEP, telefone e principalmente o campo Nome do Responsável, pois nesse campo é 
armazenado o nome da Secretaria de Educação que será exibido nos relatórios.

Também é nesse cadastro que estão alguns parâmetros, tanto para controle de 
datas quanto de funcionalidades, que devem ser marcados ou não de acordo com as 
regras da rede de ensino.

No cadastro de instituições ainda é possível definir uma série de documentações 
padrões, que permitirão ao município inserir documentos próprios e que não são 
contemplados pelos relatórios/documentos que o sistema dispõe. Para acessar a 
funcionalidade, basta selecionar uma instituição na listagem e clicar no botão 
**Documentação padrão**.

Na nova tela, você deverá definir um título para o respectivo documento e 
anexá-lo por meio do botão **Escolha um arquivo**, por fim, o sistema irá 
carregar o documento e apresentá-lo abaixo com as opções de exclusão e 
visualização, conforme exemplo abaixo.

![](../img/admin/admin-figura-3.png)

Para que o usuário possa emitir estes documentos, basta ele acessar o **Módulo 
Escola > Documentos > Documentação padrão**.

> **Dica:** É importante anexar arquivos que apresentem uma boa qualidade. 
Lembrando que serão aceitos somente arquivos no formato **pdf** com até **2MB** 
quanto ao tamanho.

## Como cadastrar um novo usuário

Nesta seção apresentaremos como são configurados os usuários que podem acessar o
sistema e como podem ser atribuídas suas permissões, bloqueios e demais 
configurações de segurança.

### Permissões (tipos de usuário/usuários)

O cadastro de **Tipo de usuários** define as categorias de usuários existentes 
atualmente, as quais garantem um nível hierárquico de acesso a determinadas 
funcionalidades do sistema.

> **Localização:** Módulo Configurações > Permissões > Tipos de usuários

Estas categorias de usuários são descritas a seguir:

Categoria | Como funciona?
---|---
Poli-institucional | O nível 1, Poli-institucional, tem acesso a qualquer funcionalidade dos módulos Escola e Biblioteca para todas as instituições (prefeituras) cadastradas no sistema.
Institucional | O nível 2, Institucional, tem acesso às mesmas funcionalidades do nível Poli-institucional, exceto o cadastro e exclusão do tipo de usuário e o cadastro e exclusão de instituição.
Escola | O nível 3, Escola, tem acesso restrito as funcionalidades da(s) escola(s) a qual o usuário for vinculado, respeitando também as permissões definidas no cadastro de funcionários do módulo Configurações.
Biblioteca | O nível 4, Biblioteca, tem acesso restrito as funcionalidades da(s) biblioteca(s) da(s) escola(s) a qual o usuário for vinculado, respeitando também as permissões definidas no cadastro de funcionários do módulo Configurações.

O cadastro de **Usuários**, propriamente dito, permite o cadastro dos usuários que acessarão o sistema, respeitando o seu tipo e as demais atribuições de acesso para a instituição, escola ou biblioteca que será vinculado.

> **Localização:** Módulo Configurações > Permissões > Usuários

![](../img/admin/admin-figura-4.png)

## Como configurar cursos

Nesta seção apresentaremos como configurar os dados dos cursos oferecidos pelas
escolas da rede de ensino. 

Neste cadastro você poderá cadastrar os cursos oferecidos pela instituição de
ensino. Entretanto, antes de iniciar o cadastramento dos cursos, é importante 
cadastrar os **Tipo de regime**, **de nível de ensino**, **do próprio ensino** e 
as **habilitações** (Módulo Escola > Cadastros > Tipos > Cursos), sendo que 
estas informações são preenchidas ao cadastrar um curso.

> **Localização:** Módulo Escola > Cadastros > Cursos

![](../img/admin/admin-figura-5.png)

As principais opções do cadastro de cursos são detalhadas a seguir:

Opção | Como funciona?
---|---
Quantidade Etapas | Esta informação define a quantidade de anos escolares do curso. No exemplo, é um curso de Educação Infantil.
Hora/Falta | Nesta opção deve ser informado um valor decimal equivalente a 01 (uma) hora falta. Ex: se as aulas são de 50 minutos, neste campo deverá ser informado o valor 0,83.
Carga Horária | Nesta opção deve ser informada a quantidade de horas total do curso para todas as etapas informadas.
Padrão Ano Escolar | Caso esta opção seja marcada, a quantidade de módulos de uma etapa (série ou ano) do curso será definida pelo ano letivo da escola, caso contrário, os módulos terão de ser informados individualmente por turma. O primeiro caso é o mais comum.

## Como configurar etapas

Nesta seção será apresentado como são gerenciados os anos letivos escolares das 
escolas.

### Etapas

Neste cadastro você poderá informar quais os etapas existentes na instituição de 
ensino. Estas etapas definem o período de semanas e meses das etapas de uma 
série/ano.

> **Localização:** Módulo Escola > Cadastros > Tipos > Escolas > Tipos de Etapas

![](../img/admin/admin-figura-6.png)

Pode ser visualizada na imagem acima a listagem das três etapas mais comuns:
Bimestral, Trimestral e Semestral.

### Ano letivo escolar

Neste cadastro é possível gerenciar os anos letivos das escolas. Ao abrir o 
cadastro de uma escola, na parte inferior serão exibidos todos os anos 
finalizados, em andamento e ainda não iniciados. Caso o ano escolar que se 
deseja gerenciar não conste na listagem, pode ser utilizado o botão **Definir 
ano letivo** para cadastrar um novo ano.

> **Localização:** Módulo Escola > Cadastros > Escola > Selecionar escola

![](../img/admin/admin-figura-7.png)

Ao pressionar o botão **Editar ano letivo**, uma nova página será apresentada 
conforme ilustrado na figura abaixo.

![](../img/admin/admin-figura-8.png)

No exemplo, foram informados dois módulos semestrais e suas datas de início e 
fim. Para adicionar as etapas, basta selecionar o módulo desejado na opção 
**Módulo**, informar os períodos nas opções **Data inicial** e **Data final**, 
e a quantidade de Dias Letivos se o usuário desejar, e pressionar o botão 
**+ Adicionar novo** para inserir as outras etapas. Para concluir a operação, o 
usuário deve pressionar o botão **Salvar**.

> **Nota:** A quantidade de módulos informada em um ano letivo escolar é igual à 
quantidade de notas que um aluno precisa obter nesse ano letivo. Desta forma, no 
exemplo, o aluno precisaria obter 2 (duas) notas no ano letivo em questão.

## Como configurar escolas

Nesta seção será apresentado como são gerenciadas as escolas da rede de ensino.

### Escolas

Neste cadastro você poderá cadastrar todas as escolas da rede municipal de 
ensino. Entretanto, antes de iniciar o cadastramento das escolas, é importante 
cadastrar o **Tipo de localização** e o **Tipo de rede de ensino** (Módulo 
Escola > Cadastros > Tipos > Escolas), sendo que estas informações são 
preenchidas ao cadastrar uma escola.

> **Localização:** Módulo Escola > Cadastros > Escolas

![](../img/admin/admin-figura-9.png)

As principais opções e/ou componentes do cadastro de escolas são detalhadas a 
seguir:

Componente | Descrição | Como funciona?
---|---|---
![](../img/admin/admin-componente-iniciar-ano-letivo.png) | Iniciar ano letivo | Ao pressionar este botão, o ano letivo da escola será iniciado.
![](../img/admin/admin-componente-editar-ano-letivo.png) | Editar ano letivo | Ao pressionar este botão, será aberto outro cadastro para serem informados os módulos do ano letivo.  
![](../img/admin/admin-componente-finalizar-ano-letivo.png) | Finalizar ano letivo | Ao pressionar este botão, o ano letivo da escola será finalizado. Deve-se notar que é permitido finalizar um ano letivo desde que não exista mais nenhuma matrícula em andamento no ano.
![](../img/admin/admin-componente-reabrir-ano-letivo.png) | Reabrir ano letivo | Ao pressionar este botão, o ano letivo já encerrado será reaberto, possibilitando editar e criar novos dados no mesmo.
--- Ano Finalizado --- | Ano Finalizado | Esta informação é exibida após ter sido pressionar o botão **Finalizar Ano Letivo**.

Quando um ano letivo é iniciado, o sistema realiza uma cópia das turmas que 
foram cadastradas para o ano letivo que será iniciado. Sendo assim, as turmas 
serão duplicadas no cadastro de turmas, sendo necessário renomear as turmas que 
farão parte do novo ano letivo.

## Como configurar regras de avaliação da rede

Nesta seção apresentaremos as formas como sistema efetua a avaliação dos alunos, 
quais os tipos e regras de avaliações possíveis e as formas de se configurar 
estas regras. Todos os cadastros das regras de avaliação necessitam de permissão 
de administrador, pois são configuradas em nível de instituição (prefeitura), ou 
seja, as regras se aplicam a todas as escolas da rede de ensino.

### Tabelas de arredondamento

O cadastro de **Tabelas de arredondamento** serve para informar como será 
efetuado o lançamento das notas para os alunos, podendo ser do tipo **Nota 
numérica** ou **conceitual**. Para as numéricas, no campos da **Casa decimal**, 
virá preenchido com os valores de 0 a 9, para que na **Ação** possa ser definido 
se será arredondado para uma casa decimal superior, inferior ou exata, ou ainda 
se não será efetuado arredondamento para a casa específica. O campo **Casa 
decimal exata**, será habilitado somente no caso de a Ação ser de arredondamento 
específico.

Para as notas do tipo conceitual, no **Rótulo da nota** deverá ser informado um 
valor alfanumérico o qual será correspondente a uma faixa mínima e máxima, a ser 
informada nos campos **Valor mínimo** e **Valor máximo** da linha tabela.

> **Localização:** Módulo Escola > Cadastros > Tipos > Regras de avaliação > 
Tabelas de arredondamento

Um exemplo de configuração de notas do tipo numéricas pode ser visualizado na 
figura abaixo.

![](../img/admin/admin-figura-10.png)

> **Nota:** Caso o **Tipo da nota** seja **Nota conceitual**, na tabela será 
exibido um campo chamado Descrição, o qual deve ser preenchido com uma 
informação relacionada ao rótulo da nota. Ex: Rótulo: *CP*. Descrição: 
*Completou*.

### Fórmulas de cálculo de média

No cadastro de **Fórmulas de cálculo de média**, o usuário poderá configurar as 
fórmulas que serão usadas para calcular a média aritmética final e de 
recuperação do aluno. Este cadastro prevê uma forma simples de criar fórmulas 
reutilizáveis para diferentes regras de avaliação. A definição das fórmulas de 
cálculo de média são configuradas pela instituição (prefeitura), e portanto os 
usuários que não possuem permissão de administrador não poderão editar tal 
fórmula.

> **Localização:** Módulo Escola > Cadastros > Tipos > Regras de avaliação > 
Fórmulas de cálculo da média

Para criar uma fórmula, as seguintes variáveis e símbolos aritméticos devem ser 
utilizados:

Variável | Descrição
---|---
En | Trata-se da etapa (bimestre, trimestre) do ano letivo, onde n representa o número da etapa. Exemplo: E1 (Etapa 1, 1º Bimestre, etc).
Se | Refere-se à soma das notas em todas as etapas.
Et | Refere-se à quantidade de etapas.
Rc | Nota de recuperação. Obs.: apenas para fórmulas do tipo **Média para recuperação**.
RSPN | Nota de recuperação específica (com valor de 1 a 10).
RSPSN | Soma das etapas ou recuperação específica (utiliza a maior nota) com valor de 1 a 10.
RSPMN | Média das etapas ou média das etapas com recuperação específica (utiliza a maior nota) com valor de 1 a 10.

Símbolo | Descrição
---|---
( ) | Trata-se do caractere parênteses e pode ser utilizado para circundar um cálculo prioritário.
* ou x | Trata do caractere alfanumérico asterisco e da letra x, que são utilizados para a operação de multiplicação.
/ | Trata-se do caractere barra e é utilizado para a operação de divisão.
+ | Trata-se do caractere da operação de adição.
< ou > | Trata-se do caractere utilizado para distinguir, respectivamente o sinal de menor (<) ou maior (>).

> **Fórmula de média aritmética simples:** Se / Et
> - executa a soma das notas de todas as etapas divididos pela quantidade de 
etapas.

> **Fórmula de recuperação ponderada:** (Se / Et * 0.6) + (Rc * 0.4)
> - executa a soma das notas das etapas divididos pela quantidade de etapas 
multiplicado por 0.6, e soma isto a média de recuperação obtida multiplicada por 
0.4.

> **Substitui menor nota por recuperação:**
> - Substitui menor nota (En) por nota de recuperação (Rc), em ordem 
decrescente. Somente substitui quando Rc é maior que En. Ex: E1 = 2, E2 = 3, E3 
= 2, Rc = 5. Na fórmula será considerado: E1 = 2, E2 = 3, E3 = 5, Rc = 5.

### Regras de avaliação

O cadastro de **Regras de avaliação** permite a configuração de parâmetros com 
os quais o aluno será avaliado, como o tipo de nota, a fórmula de cálculo de 
média, entre outros. Como pré-requisitos, uma regra de avaliação precisa de uma 
tabela de arredondamento cadastrada (para o tipo de nota desejada) e uma fórmula 
de cálculo de média, já vistos anteriormente.

> **Localização:** Módulo Escola > Cadastros > Regras de avaliação

Uma regra de avaliação possui diversas opções e o resultado da avaliação e 
promoção do aluno baseado nas notas e faltas depende da combinação dessas 
opções. Na figura abaixo é demonstrado o cadastro de uma regra de avaliação por 
média e presença, e tipo de falta por componente curricular (disciplinas).

![](../img/admin/admin-figura-11.png)

No quadro a seguir consta o detalhamento de cada opção do cadastro de regras de 
avaliação:

Opção | Como funciona?
---|---
Sistema de nota | Define que tipo de nota (e que tipo de tabela de arredondamento) será utilizado para lançar notas nos componentes curriculares cursados pelo aluno.
Tabela de arredondamento de nota | Tabela que define faixas de arredondamento para o qual uma nota lançada no boletim do aluno será arredondada.
Progressão | Define o comportamento utilizado para promover ou reter (reprovar) o aluno. As opções são: <ul><li style="margin: 20px">**Continuada:** promove o aluno independentemente de ter sido aprovado em cada componente curricular cursado ou de ter a presença mínima necessária;</li><li style="margin: 20px">**Não-continuada: média e presença:** promove o aluno somente quando este é aprovado em cada componente curricular com uma média igual ou superior a especificada em Média final para promoção e com uma porcentagem de presença igual ou superior a especificada em Porcentagem de presença;</li><li style="margin: 20px">**Não-continuada: somente média:** promove o aluno somente quando este é aprovado em cada componente curricular com uma média igual ou superior a especificada em Média final para promoção;</li><li style="margin: 20px">**Não-continuada manual:** promove o aluno somente por confirmação manual (após todas as notas e faltas terem sido lançadas no boletim).</li></ul>
Média final para promoção | Define a média necessária para um aluno ser aprovado em cada componente curricular (disciplina) cursado.
Média exame final para promoção | Define a média necessária para um aluno ser aprovado em cada componente curricular (disciplina) cursado após realização do exame final.
Fórmula de cálculo de média | Define a fórmula de cálculo de média final.
Fórmula de cálculo de recuperação | Define a fórmula de cálculo de média após a recuperação. Caso não seja definida uma fórmula, a regra não possibilitará que seja lançada uma nota de exame final (recuperação).
Porcentagem de presença | Define a porcentagem de presença mínima ao qual o aluno deve ter durante o período letivo.
Parecer descritivo | Define a regularidade e forma com o qual será informado o parecer descritivo.
Apuração de presença | Define se a presença (faltas) será lançada por componente curricular ou no geral (por etapa).
Nota máxima/mínima geral | Definem qual o valor de nota máxima e mínima permitidas no sistema.
Nota máxima exame final | Define qual o valor da nota máxima permitida no sistema para o exame final.
Qtd. Máxima de casas decimais | Define a quantidade máxima de casas decimais permitidas no sistema (ex.: 2 casas decimais, ou seja, 7.**45**)
Qtd. de disciplinas/matrículas de dependência | Estes dois campos definem qual a quantidade máxima de disciplinas de dependência em uma única matrícula; e quantas matrículas de dependência para um mesmo aluno são permitidas.
Reprovação automática | Marcando este parâmetro o sistema não apresentará campo de nota de exame para os alunos que não poderão alcançar a média necessária, reprovando os mesmos de forma automática.
Utilizar uma nota geral por etapa | Parâmetro responsável pela regra de média geral, já citada no processamento de históricos, e que define que a reprovação/aprovação do aluno depende de uma única média (englobando todos os componentes).
Permitir definir componentes em etapas específicas | Marcando este parâmetro, as telas de Séries da escola e Turmas, permitem que o usuário definida componentes curriculares específicos por etapa.
Aprovar alunos pela média das disciplinas | Marcando este parâmetro, alunos que deveriam ser reprovados, poderão ser aprovados caso a média de todas as médias dos componentes curriculares, for superior a nota de aprovação de exame final.
Permitir recuperação paralela | Define se haverá ou não recuperação paralela por etapa nos componentes curriculares em que a média final não foi atingida, permitindo ainda ser recuperação paralela de todas as etapas ou etapas específicas. Quando está opção for utilizada deverá ser informada a média necessária para realizar a recuperação no campo *Média da recuperação paralela*.

A regra de avaliação usa outros valores especificados nos cadastros de Cursos e 
na Matrícula. Para o cálculo de porcentagem de presença, por exemplo, é 
necessário que a opção Hora/falta seja especificada no cadastro de Cursos. Esse 
campo é um valor decimal e representa o quanto uma falta unitária representa em 
horas. Para especificar uma hora/falta de 40 minutos, por exemplo, é necessário 
informar o valor 0,80 nesse campo.

A quantidade de faltas e notas a serem lançadas depende da quantidade de módulos 
cadastrados na escola ou na turma. Caso um Curso seja do tipo **Padrão ano 
escolar**, será possível lançar notas e faltas para a quantidade de módulos 
especificadas no Ano letivo da Escola, caso contrário, usa a quantidade de 
módulos especificados para a Turma ao qual o aluno está enturmado.

## Como configurar as séries

No cadastro **Séries** você poderá cadastrar todas as séries – ou anos escolares
– de cada curso da instituição. As séries/anos específicas das escolas serão 
vistas em seguida, no cadastro **Séries da escola**.

> **Localização:** Módulo Escola > Cadastros > Séries

![](../img/admin/admin-figura-12.png)

As principais opções do cadastro de séries/anos são detalhadas a seguir:

Opção | Como funciona?
---|---
Etapa curso | Nesta opção deve ser informada a etapa do curso correspondente a série/ano que se está cadastrando.
Regra avaliação | Nesta opção deve ser informada a regra de avaliação que será utilizada para esta série/ano. O assunto regras de avaliação será visto nos próximos capítulos.
Regra de avaliação diferenciada | Esta informação será preenchida somente quando o parâmetro '*Utilizar regra de avaliação diferenciada*' estiver marcado no cadastro das escolas, e neste caso irá utilizar uma regra diferente da geral.
Carga horária | Nesta opção deve ser informada a carga horária total da série/ano, informação que posteriormente é utilizada para verificar a frequência do aluno.

## Como configurar os Componentes Curriculares

Neste cadastro você poderá cadastrar as disciplinas que poderão ser lecionadas 
na rede de ensino. Antes de iniciar o cadastramento dos componentes
curriculares, é importante cadastrar as **Áreas de conhecimento** e os **Tipos 
de dispensa de disciplina**, sendo que os cadastros das áreas de conhecimento 
serão informados ao cadastrar as disciplinas e os tipos de dispensa na matrícula 
do aluno. O processo de matrícula de alunos será visto nos próximos capítulos.

> **Localização:** Módulo Escola > Cadastros > Componentes curriculares

![](../img/admin/admin-figura-13.png)

## Como configurar as séries da escola

No cadastro de **Séries da escola** você poderá cadastrar todas as séries de uma 
escola, a qual herda as informações do cadastro de séries/anos padrões da 
instituição, mas podendo também definir configurações específicas da escola.

> **Localização:** Módulo Escola > Cadastros > Séries da escola

![](../img/admin/admin-figura-14.png)

As principais opções encontradas no cadastro de Séries da escola estão 
detalhadas a seguir:

Opção | Como funciona?
---|---
Nome | Nesta opção serão listadas todas as disciplinas padrão para a série/ano da instituição, sendo que é possível definir quais estarão disponíveis para a série/ano da escola.
Carga horária | Nesta opção poderá ser informada uma carga horária para a escola diferente do padrão da série/ano da instituição.
Usa padrão do componente | Esta opção sempre estará marcada, e informa ao sistema que a série/ano da escola utiliza a carga horária padrão da instituição. Caso algum valor tenha sido informado no campo Carga horária, esta opção deve ser desmarcada.
Bloquear enturmação após atingir limite de vagas | Ao marcar esta opção, quando atingir o limite de vagas que é definido na turma, não será mais possível fazer enturmações.
Bloquear cadastro de novas turmas antes de atingir limite de vagas (no mesmo turno) | Ao marcar esta opção, não será possível cadastrar novas turmas até que o limite de vagas da turma for atingido. Neste caso, em uma turma matutina que suporta 25 alunos, não será possível criar outra turma matutina até que as 25 vagas estejam preenchidas.

## Como configurar a sequência de enturmação

No cadastro de Sequência de Enturmação você poderá configurar como os alunos 
irão progredir de uma série/ano para outra. Segue abaixo um exemplo de como deve 
ser informado:

> **Localização:** Módulo Escola > Cadastros > Tipos > Séries > Sequência de 
Enturmação

Curso Origem: Ensino Fund. 9 Anos Iniciais  → Curso Destino: Ensino Fund. – 9 
Anos Iniciais
Série Origem: 1º Ano → Série Destino: 2º Ano
Curso Origem: Ensino Fund. 9 Anos Iniciais  → Curso Destino: Ensino Fund. – 9 
Anos Iniciais
Série Origem: 2º Ano → Série Destino: 3º Ano

Continua assim por diante. Somente é alterado o curso destino quando, neste 
exemplo, é passado do 5º Ano para o 6º, que pertence ao curso Anos finais.


