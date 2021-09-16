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
