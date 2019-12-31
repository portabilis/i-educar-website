---
author: Tiago de Faveri Giusti
authorURL: https://www.linkedin.com/in/giustin
title: Retrospectiva 2019: Comunidade ganha força e se prepara para o futuro
---

![](https://user-images.githubusercontent.com/1082624/71634226-06d9a780-2bf9-11ea-8b68-70c49c54657b.png)

Na retrospectiva do ano passado, eu disse que 2019 seria um ano ainda melhor. E por mais que não pareça tão evidente, com grandes entregas e grandes feitos como foi ano passado, podemos ver tudo o que construímos juntos em 2018 crescer, se desenvolver e tomar sua própria forma.

Se 2018 foi um ano de mudanças, 2019 foi um ano de ganhar força.  <!--truncate--> Todas aquelas mudanças agora são de fato parte do que é a comunidade, e do que ela vem se tornando. Enfim nos familiarizamos, e agora sinto que tudo tem tomado forma.

É claro que ainda muitas coisas precisam melhorar, do lado da governança, dos contribuidores, dos adotantes e dos entusiastas. Mas só sabemos que certas coisas precisam melhorar pois colocamos as grandes construções de 2018 à prova, e as fizemos funcionar.

Mas tudo isso não quer dizer que ficamos estagnados. Aconteceram, sim, grandes entregas e marcos significativos. Como a versão 2.2 do i-Educar com melhorias que o permitem escalar horizontalmente, ou, como a refatoração da sincronização do i-Diário, que traz muito mais confiança para os usuários. 

É preciso lembrar também do crescimento significativo e uma participação de pessoas muito maior que nos anos anteriores, e até uma oportunidade num programa global de aceleração da ONU, levando a mensagem do desenvolvimento aberto e colaborativo para milhares.

Então, nessa retrospectiva, vamos tratar das duas coisas: as conquistas do ano e nossas apostas para 2020. Vamos lá?

# i-Educar 2.2

O compromisso da Portabilis como mantenedora é reforçado em cada linha de código a cada novo release que fazemos. E temos o compromisso de melhorar cada vez mais o software. E antes de começarmos a fazer grandes mudanças, era preciso limpar a casa, e é isso que a versão 2.2 do i-Educar se propõe a fazer.

## Atualização do PHP
Pra começar, atualizamos a versão do PHP para a 7.3 para que a linguagem se mantenha atualizada, uma vez que ela terá suporte ativo até dezembro de 2020.

## Atualização do Laravel
E já que atualizamos a versão da linguagem também atualizamos a versão do framework para a versão 5.8 do Laravel.

## Reestruturação do banco de dados
Foi feita a engenharia reversa do banco de dados do i-Educar para um maior controle da estrutura e dos dados que são armazenados.

## Limpeza e diminuição do código fonte
Muitos módulos do i-Educar foram depreciados ou não são utilizados a anos e seu código fonte não foi removido do repositório. Foram abertos pull requests para remover arquivos não referenciados ou com apenas referências circulares. Além de melhorias na tela de enturmação em lote e melhorias na tela de permissões.

### Enturmações em lote
Após clicar em uma turma na listagem que é exibida, a próxima tela, permite enturmar e desenturmar alunos da turma, em um mesmo processo, ou copiar todas as enturmações para outra turma.

Agora é exibida o número de alunos permitidos na turma assim como as vagas disponíveis e o período de enturmação.

Acontece que muitos usuários cometiam o erro de desenturmar alunos por não desmarcar os checkboxes dos alunos já enturmados ao realizar uma enturmação em lote. Dessa forma, foi dividido em duas telas: 

![image](https://user-images.githubusercontent.com/1082624/71634312-b151ca80-2bf9-11ea-9690-372e1660ca90.png)
###### Nova tela de desenturmação em lote

![image](https://user-images.githubusercontent.com/1082624/71634350-0b529000-2bfa-11ea-81a3-8208c38d5324.png)
###### Nova tela de enturmação em lote

### Tela de permissões
As funcionalidade de alteração do nível de permissão em massa, continuam a funcionar normalmente.

Apenas serão exibidos para o usuário que está cadastrando/editando o tipo de usuário, os menus/processos que ele tem acesso, ou seja, ele não irá mais poder dar permissão de exclusão se ele mesmo não tiver.

Também foi adicionado campo de busca para facilitar encontrar o menu/permissão.

![image](https://user-images.githubusercontent.com/1082624/71634380-510f5880-2bfa-11ea-9e3c-362bc7555b10.png)
###### Nova tela de permissões

## i-Educar + melhorias técnicas = escalabilidade
Com isso, a evolução técnica do i-Educar continua acontecendo na versão 2.2, e que, consequentemente, permitiu a redução da infraestrutura necessária para rodar a aplicação fazendo com que ela se torne mais escalável horizontalmente.

Você pode saber mais sobre a versão 2.2 do i-Educar [aqui](https://github.com/portabilis/i-educar/releases/tag/2.2.0), e acompanhar todos os releases [aqui](http://github.com/portabilis/i-educar/releases).

# i-Diário

Completou um ano que a [Portabilis liberou o i-Diário em comunidade](https://ieducar.org/blog/2018/12/31/retrospectiva-2018-a-ascens%C3%A3o-da-comunidade-i-educar.html#agora-tambem-por-todos-os-professores-do-brasil), um software que foi completamente desenvolvido por nós, sendo apropriado, adotado e recebendo contribuições da comunidade é algo que nos deixou muito orgulhosos. E mantendo nosso comprometimento com a comunidade, fizemos uma série de melhorias no i-Diário, pensando na segurança do usuário ao utilizar o software, e na performance dele.

## Sincronização refatorada
A sincronização dos lançamentos no i-Diário para o i-Educar foi refatorada para garantir melhor performance. Também estamos fazendo um melhor uso do Sidekiq e de ajuste dos dados, que permitiu melhor performance no envio de avaliações pelos professores.

Além disso, foram feitos diversos bloqueios no sistema para garantir a integridade dos dados. Também, os dados sincronizados não são mais deletados, são apenas desativados, para garantir que possam ser recuperados posteriormente.

## Auditoria melhorada
Agora, todas as tabelas do sistema possuem auditoria, trazendo mais confiança e segurança no lançamentos dos dados, permitindo uma conferência mais simples do que mudou em cada área do sistema.

## Testes automatizados
Aumentamos e melhoramos a cobertura de testes automatizados para trazer mais segurança ao usuário. Refatoramos boa parte dos testes para simplificar o uso das factories.

## Instalação descomplicada
Para facilitar a adoção do sistema, foi feito um vídeo de instrução para a instalação do i-Diário de forma descomplicada. Esse vídeo, por enquanto, por ser conferido [aqui](https://forum.ieducar.org/t/video-de-instalacao-do-i-diario/858).

Você pode saber mais sobre os releases do i-Diário [aqui](https://github.com/portabilis/i-diario/releases).

# Alcance e participação mostra como estamos ganhando força

![image](https://user-images.githubusercontent.com/1082624/71634453-004c2f80-2bfb-11ea-8795-bba56d8632ee.png)
##### Aumentamos exponencialmente o volume de acessos ao site (http://ieducar.org) de 3 mil para mais de 30 mil em 2019

![image](https://user-images.githubusercontent.com/1082624/71634474-1e199480-2bfb-11ea-85c0-e91773461508.png)
##### Em nosso fórum, a participação ativa dos membros gerou 296 tópicos, 1.850 resposta e mais de 51 mil visualizações. Ainda não participa do fórum? Tá esperando o quê? [Acesse aqui](https://forum.ieducar.org/).

![image](https://user-images.githubusercontent.com/1082624/71634497-4903e880-2bfb-11ea-8c2a-9fd43d580963.png)
##### Ganhamos novos membros em nosso grupo do Telegram e agora somos 172, e muito ativos! Vem conversar com a comunidade no Telegram! [Clique aqui](https://t.me/ieducar) pra entrar pro grupo!

![image](https://user-images.githubusercontent.com/1082624/71634505-6df85b80-2bfb-11ea-8398-8163b00cb990.png)

##### No repositório do i-Educar no Github alcançamos mais de 19 mil commits, 57 releases e 42 contribuidores. E já somos um repositório com 306 estrelas! :)  Não é só com código que você pode ajudar a gente, então, deixe sua estrelinha pro [projeto no Github](https://github.com/portabilis/ieducar)!

![image](https://user-images.githubusercontent.com/1082624/71634530-b0219d00-2bfb-11ea-949b-ed2449c6504f.png)
##### E no repositório do i-Diário, quase 7 mil commits, 14 releases, 23 contribuidores e 54 estrelas. Não é só com código que você pode ajudar a gente, deixe sua estrelinha pro [projeto no Github](https://github.com/portabilis/i-diario)!

# Adoções do i-Educar por todo o Brasil

Todos os anos eu faço posts pedindo para as redes que adotaram o i-Educar relatem seus casos de sucesso, pois isso é muito importante para entendermos como anda esse processo, se tem redes instalando e sendo bem sucedidas ou prestadores de serviço gerando negócios e implantando as soluções. 

Infelizmente, nem todos os membros da comunidade compartilham suas histórias com a comunidade. Então, essa é a lista de adoções conhecida, via adoções pelas próprias redes ou prestadores de serviço:

- Conceição do Araraguaia (PA)
- Inhangapi (PA)
- Belterra (PA)
- Flores (PE)
- Pilar (AL)
- Iuiú (BA)
- Paulo Ramos (MA)
- Ipanema (MG)
- Chapada dos Guimarães (MT)
- Santana do Araguaia (PA)
- Faro (PA)
- Barra de Guabiraba (PE)
- Belém de Maria (PE)
- Carnaíba (PE)
- Parnamirim (PE)
- São José do Egito (PE)
- Triunfo (PE)
- Tabira (PE)
- Caridade do Piauí (PI)
- São Miguel (RN)
- Itaú (RN)
- Serra Negra do Norte (RN)
- São José do Seridó (RN)
- Terra de Areia (RS)
- **Sua rede pode ser a próxima!**

Compartilhar seu caso de sucesso com o i-Educar é importante para a comunidade, e incentiva outras redes a adotarem. Então, você pode (e deve) contar seu caso [neste tópico](https://forum.ieducar.org/t/casos-de-sucesso-compartilhe-suas-experiencias-de-adocao-do-i-educar-pelo-brasil/282) do fórum.

# i-Educar por toda a América Latina?

Quem acompanha a Portabilis há algum tempo, sabe do quanto falamos de impacto social através da Educação. Isso é algo que já trazemos, inclusive, para o discurso da comunidade. É algo que acreditamos profundamente, e sempre buscamos formas de amplificar esse impacto que conseguimos provocar nas redes de ensino municipais do país.

Esse ano, a Portabilis participou com o i-Educar do **Accelerate 2030**, um programa global, co-iniciado pelo [Impact Hub](https://impacthub.net/) e pelo [Programa das Nações Unidas para o Desenvolvimento](https://www.undp.org/) (PNUD), com o objetivo de escalar globalmente negócios que estejam em fase de crescimento e alinhados com os [Objetivos de Desenvolvimento Sustentável](http://www.br.undp.org/content/brazil/pt/home/sustainable-development-goals.html) (ODS), da [Agenda 2030 da ONU](https://nacoesunidas.org/pos2015/agenda2030/).

De mais de 300 empresas inscritas no programa, ficamos entre as [35 empresas selecionadas](https://nacoesunidas.org/accelerate-2030-divulga-35-empresas-finalistas-da-etapa-nacional/) para participar de uma série de workshops com o objetivo de um plano de escala internacional. Os planos de escala dessas 30 empresas foram apresentados para a comissão do programa avaliar, que enviou as 10 melhores para que o PNUD pudesse escolher quais empresas iriam participar de uma segunda fase de workshops em Genebra na sede da ONU. 

Durante o programa, conseguimos comprovar o potencial de escala internacional da solução, e é um passo que gostaríamos de dar em breve, permitindo que a Comunidade i-Educar se expanda primeiro pela América Latina, e depois para outros países.

Nosso plano de escala foi desenvolvido todo em volta da principal característica do i-Educar, que é adaptável à diversas de rede ensino com as mais diferentes necessidades, e pelo seu caráter livre. Com isso, ficamos em 6º lugar no ranking, dos melhores planos de escala do Brasil.

# O que esperar do futuro do i-Educar?

## Evolução do software

Em 2020, queremos continuar evoluindo as soluções. Ainda enfrentamos alguns desafios com a arquitetura do i-Educar e por isso queremos otimizá-lo ainda mais para diminuir as barreiras de rodar a aplicação, de forma que ele seja cada vez mais escalável, além de ter APIs mais estruturadas para que outras soluções possam se conectar ao i-Educar.

Outro grande desafio do i-Educar, é a sua usabilidade. Ainda não temos uma interface que acreditamos ser a ideal para a maioria das pessoas. Acreditamos que quanto mais melhorarmos a experiência do usuário, menor serão as barreiras de adoção do software.

Quanto ao i-Diário, já estamos trabalhando para melhorar a jornada do professor dentro do produto. Pois acreditamos que essa melhora, juntamente com uma melhora em sua estabilidade vão permitir que os usuários se sintam mais contemplados pela ferramenta, e reduza a barreira de uso.

## Comunidade participativa

Queremos encontrar mais pessoas dispostas a não só aderir, mas também a contribuir com o desenvolvimento dos produtos. A Portabilis ainda é a principal fomentadora de código, e é importante que surjam mais player dispostos a contribuir. 

Por isso é importante que você também nos ajude a trazer mais membros, para que a comunidade se torne ainda maior.

# Dinheiro público, software público. Junte-se ao movimento!

2020 é um ano de eleições municipais, então também é uma oportunidade de fazermos advocacy pelo movimento de software livre e código aberto para setor público aos pré-candidatos, para gerar consciência para os potenciais novos gestores sobre os benefícios ao governo e a sociedade de adotar este tipo de solução.

[Nesse link](https://ieducar.org/blog/2018/12/31/retrospectiva-2018-a-ascens%C3%A3o-da-comunidade-i-educar.html#por-que-estamos-fazendo-isso-e-por-que-voce-deveria-se-juntar-a-nos), listamos diversos motivos sobre de porquê o i-Educar é bom para o governo e para a sociedade.

Além disso, se você está explicando software livre e público para quem trabalha no governo e nunca ouviu falar, recomendo conhecer a campanha [Public Money, Public Code](https://publiccode.eu/pt/) da Free Software Foundation Europe (FSFE), que inclui [este vídeo](https://www.youtube.com/watch?v=MLVpPGtWW_I) didático e prático para compreender o tema. 

# Leis favoráveis ao uso de software livre

O município de Recife, em Pernambuco, já entendeu isso e criou uma lei municipal favorável ao uso de software livre que você pode conferir [aqui](https://drive.google.com/open?id=1_LYAJWGnBYhgSXajyxFQWHaMHffIfthM).

E não são somente os municípios que podem legislar a favor desta modalidade, o governo do estado de Goiás também tem lei favorável ao uso de software livre, que pode ser conferida [aqui](https://drive.google.com/open?id=1rtye-M56aNiLWDcqiGjhXNkSgyEBE0do).

E o governo do estado do Rio Grande do Sul também tem lei que dá preferência à contratação de softwares livre que pode ser conferida [aqui](https://drive.google.com/open?id=1g8e5aFXsosuOXDPHA6TOpU-1vmtpUMI-).

E tenho certeza que se trabalharmos juntos em 2020, conscientizando a população e os candidatos, podemos fazer com que mais leis surjam em novas cidades e estados, dando mais transparência e economicidade à gestão pública.

# Gostou das novidades?

2020 está só começando, e para não perder as novidades, nos acompanhe no [Fórum](http://forum.ieducar.org/), [Telegram](https://t.me/ieducar), [Twitter](https://twitter.com/ieducar) e [Facebook](http://facebook.com/ieducar) e saiba mais sobre todos os próximos lançamentos e movimentos da **Comunidade i-Educar!** ❤️

**Eu sou Tiago Giusti, CEO da Portabilis e Coordenador da Comunidade i-Educar.**

**Junto com o #TimePortabilis e a Comunidade, acredito que podemos mudar o nosso país através da educação, tecnologia e uso de dados.**

**Junte-se a nós no movimento do #iEducar #PorTodasAsEscolasDoBrasil!**





