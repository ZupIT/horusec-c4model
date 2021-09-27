# Horusec

* [C4Model](#C4Model)
  * [C1 - Context](#C1---Context)
  * [C2 - Container](#C2---Container)
  * [C3 - Component](#C3---Component)
    * [CLI](#CLI)
    * [Operator](#Operator)
    * [Platform](#Platform)
    * [VScode](#VScode)

---

## C4Model

## Overview

Uma das definições usadas de arquitetura de software é que ela define as partes de um software e é a estratégia tecnológica de um produto/projeto. E como toda estratégia, é muito importante que ela seja vista e frequentemente visitada e atualizada. Afinal, um planejamento sem visualização tenderá a ser falho.

* Documentar a arquitetura de um projeto muitas vezes é um processo maçante, que exige tempo, conhecimento de ferramentas e técnicas para diagramação e documentação. O maior desafio dentro de uma documentação de arquitetura é evitar dois cenários.

* Documentações de arquitetura muito complexas e por consequência elas tendem a ficarem confusas e obsoletas, assim, se perde o seu propósito. Ou seja, se gasta bastante tempo para uma documentação que tende a ser inutilizada eventualmente.

Documentações pobres com pouca informação ou informações falhas.

Em ambos os casos o resultado final é que elas acabam atrapalhando mais do que ajudando.

A visualização da arquitetura é crucial em diversos aspectos e responde várias perguntas, por exemplo, como o meu sistema integra entre eles mesmo e outros sistemas? Como consigo escalar a minha aplicação? Como garantir a segurança entre as minhas aplicações, dentre outros pontos.

Pensando nisso, nos motivamos para criar uma visualização da nossa arquitetura de um modo bastante simples com o C4 Model.

## O que é o C4Model?

O C4 Model é baseado no 4+1 e UML e foi criado por Simon Brown entre 2006 e 2011. O modelo surgiu com o intuito de ajudar a resolver o problema de documentação de arquiteturas falhas, difíceis de entender e manter, trazendo uma visão mais clara da arquitetura documentada abrangendo vários níveis e que seja relevante para as várias “personas” envolvidas. Ele é dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. A ideia é que cada nível se aprofunde mais nos detalhes e informações do nível anterior.

## O que é o Horusec ?

Horusec é uma ferramenta de código aberto que realiza análise de código estático para identificar falhas de segurança durante o processo de desenvolvimento. Atualmente, as linguagens de análise são: C#, Java, Kotlin, Python, Ruby, Golang, Terraform, Javascript, Typescript, Kubernetes, PHP, C, HTML, JSON, Dart, Elixir, Shell, Nginx, Swift. A ferramenta possui opções para pesquisar os principais vazamentos e falhas de segurança em todos os arquivos do seu projeto, bem como no histórico do Git. O Horusec pode ser usado pelo desenvolvedor por meio da CLI e pela equipe DevSecOps em esteiras CI/CD.

<img src="https://horusec.io/site/horus-animation-1.gif" alt="usec-animation-cli" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">

<img src="https://horusec.io/site/static/67e40e4cf66a01b3cd5c68cb8089f911/ee604/example-illustration.png" alt="horusec-arquitecture" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">


## C1 - Context

[C4Model](#Horusec)

No primeiro nível podemos ver de forma superficial como é a ligação entre em os diferentes componentes do Horusec e um pouco sobre suas responsabilidades.

Nesse nível contextualizamos de forma macro como o Horusec entrega o resultado de suas análises e permite que o usuário possa gerenciar as vulnerabildades na plataforma web. Onde:
  - **Usuário:** Qualquer pessoa que deseje realizar análise de código e gestão de vulnerabilidades pelo Horusec. Seja ela um DevSecOps, Desenvolvedor, PM, Gestor, QA, etc.

  - **Sistema Horusec-CLI:** A Horusec-CLI é uma interface de linha de comando (CLI) que orquestra outras ferramentas de análise estática de código. Sua principal funcionalidade é identificar as linguagens de programação do projeto automaticamente e iniciar as devidas ferramentas, logo em seguida poderá ser exportada as informações unificadas em um dado em comum. Também é possível enviar a análise realizada para o sistema Horusec-Platform onde poderá retirar de metricas e realizar a gestão de vulnerabilidades em uma aplicação web.

  - **Sistema Horusec-Platform:** A Horusec-Platform é um conjunto de serviços web para gestão e visualização de vulnerabilidades encontradas pelo sistema Horusec-CLI.

  - **Sistema Horusec-Operator:** O Horusec-Operator é um sistema de kuberntes operators que agiliza e potencializa a instação do sistema Horusec-Platform de forma unificada.

  - **Sistema Horusec-VsCode:** O Horusec-VsCode é uma extenção da Horusec-CLI para um Ambiente de Desenvolvimento Integrado (IDE) [Visual Studio Code](https://code.visualstudio.com/) onde pode realizar as análises sem necessitar de instalar um binário em sua máquina local.

  - **Kubernetes:** Orquestra os containers das aplicações.

  - **Resultado:** Resultado das análises realizadas pelos sistemas Horusec-CLI ou Horusec-VsCode.



![diagram](c1.svg)

## C2 - Container

[C4Model](#Horusec)

No segundo nível podemos verificar de forma mais detalhada como é interligada a arquitetura do Horusec e seus componentes, como também as tecnologias que fazem parte desse ecossistema.

O Horusec foi construindo utilizando usando as seguintes abordagens:
- A **Horusec-CLI** é um compilador que executa localmente na maquina do usuário seja atrávez de uma maquina de desenvolvimento ou uma esteira CI/CD em busca de vulnerabilidades. E seus containers são:
  - **Horusec-CLI:** interface de linha de comando que realiza orquestração de ferramentas de análise estática de código.
- O **Horusec-VsCode** é uma extensão da ferramenta visual studio code que utiliza a Horusec-CLI para análisar projetos em busca de vulnerabilidades. E seus containers são:
  - **Horusec-VsCode** é responsável por iniciar o horusec-cli em imagem docker e trazer o resultado da análise para dentro do Ambiente de Desenvolvimento Integrado (IDE) em um formato amigável a fim de garantir que o desenvolvedor faça suas devidas modificações.
- O **Horusec-Platform** é uma plataforma web construida em micro-serviços para visualização e gestão das vulnerabilidades. E seus containers são:
  - **API** Responsável por salvar as análises realizada via Horusec-CLI no banco de dados principal e publicar para os serviços analytic e webhook via message broker.
  - **Analytic** Responsável por receber as análises realizadas via message broker e salvar no banco de dados analytic para visualização no dasboard do container Horusec-Manager.
  - **Auth** Responsável por gerenciar sessão e acessos a plataforma web através do container Horusec-Manager.
  - **Core** Responsável por gerenciamento de repositórios, workspaces e tokens da plataforma web através do container Horusec-Manager.
  - **Manager** Responsável por disponibilizar a página estática para integração com os containers do Horusec-Platform.
  - **Messages** Responsável por diparos de emails em determida ações do usuário da plataforma web através do container Horusec-Manager.
  - **Vulnerability** Responsável por realizar a gestão das vulnerabilidades criadas pelo container Horusec-API.
  - **Webhook** Responsável por disparo de análises para serviços de terceiros via HTTP na plataforma web através do container Horusec-Manager.
- O **Horusec-Operator** é uma aplicação usando a base de kubernetes operator para agilizar e garantir que os serviços sejam entregues nos formatos desejados. E seus containers são:
  - **Horusec-Operator** é responsável por realizar a integração com o kubernetes, onde após instalado sua CRD no cluster ele pode identificar que o usuário pediu modificações e aplicar no cluster de acordo com as configurações enviadas pelo usuário.


![diagram](c2.svg)

## C3 - Component

[C4Model](#Horusec)

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os componentes. Nesse nível damos ênfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores.

O Horusec hoje é dividido em 4 frentes, sendo cada um deles um container dentro do C4Model.

- [CLI](C3%20-%20Component/CLI/HOME)
- [Operator](C3%20-%20Component/Operator/HOME)
- [Platform](C3%20-%20Component/Platform/HOME)
- [VScode](C3%20-%20Component/VScode/HOME)

## CLI

[C4Model](#Horusec)

A CLI (sigla para interface de linha de comando) é o programa responsável por processar comandos de um software ou qualquer programa computacional por meio de texto. No contexto da ferramenta, o Horusec-CLI é a parte de código que permite você rodar os comandos de análise de segurança e de identificação e/ou classificação de vulnerabilidades.


![diagram](c3.svg)

## Operator

[C4Model](#Horusec)

O horusec-operator é um facilitador para gerenciamento e orquestramento do ambiente de produção do [horusec-platform](C3%20-%20Component/Platform/HOME).


![diagram](c3.svg)

## Platform

[C4Model](#Horusec)

A aplicação web do Horusec (horusec-platform) é uma extensão das funcionalidades da CLI. Na aplicação é possível realizar a organização em repositórios e workspaces para facilitar a visualização das vulnerabilidades em forma de gráficos e também classifica-las da forma que convém a equipe.


![diagram](c3.svg)

## VScode

[C4Model](#Horusec)

O Horusec disponibiliza a extensão do VS Code para realizar análises de código, na qual é possível você fazer análises completas em seu projeto com apenas um clique.

![diagram](c3.svg)