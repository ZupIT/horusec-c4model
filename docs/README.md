# C4Model

* [**C4Model**](/docs/README.md)
  * [C1 - Context](/docs/C1%20-%20Context/README.md)
  * [C2 - Container](/docs/C2%20-%20Container/README.md)
  * [C3 - Component](/docs/C3%20-%20Component/README.md)
    * [CLI](/docs/C3%20-%20Component/CLI/README.md)
    * [Operator](/docs/C3%20-%20Component/Operator/README.md)
    * [Platform](/docs/C3%20-%20Component/Platform/README.md)
    * [VScode](/docs/C3%20-%20Component/VScode/README.md)

---

- [C1 - Context](/docs/C1%20-%20Context/README.md)

- [C2 - Container](/docs/C2%20-%20Container/README.md)

- [C3 - Component](/docs/C3%20-%20Component/README.md)

---

## Overview

Por definição, arquitetura de software é a estratégia tecnológica de um produto e/ou serviço, definindo as partes que compõem um sistema. E, como toda estratégia, é fundamental que ela esteja em constante atualização, afinal um planejamento sem visualização tenderá a ser falho.

Documentar a arquitetura de um projeto, muitas vezes, é um processo maçante e que exige tempo, conhecimento de ferramentas e técnicas para diagramação e documentação. O maior desafio dentro de uma documentação de arquitetura é evitar dois cenários:

1. Documentações de arquitetura muito complexas e que, por isso, tendem a ficarconfusas e obsoletas, perdendo o seu propósito. Em outras palavras: se gasta bastante tempo para uma documentação que tende a ser inutilizada eventualmente.

2. Documentações pobres com pouca informação ou informações falhas.

Em ambos os casos, o resultado final é que elas acabam atrapalhando mais do que ajudando.

A visualização da arquitetura é crucial em diversos aspectos e responde a várias perguntas, por exemplo: "Como o meu sistema se integra com outros sistemas? Como consigo escalar a minha aplicação? Como garantir a segurança entre as minhas aplicações?", dentre outros pontos.

Essa foi a nossa motivação para desenvolver o C4 Model, ou seja, a de uma visualização da nossa arquitetura de um modo bastante simples e eficaz.

## O que é o C4Model?

OO C4 Model é baseado no 4+1 e UML e foi criado por Simon Brown entre 2006 e 2011. O modelo surgiu com o intuito de ajudar a resolver o problema de documentação de arquiteturas falhas ou difíceis de entender e manter, trazendo uma visão mais clara da arquitetura documentada ao abranger vários níveis e que seja relevante para as várias “personas” envolvidas.

Ele é dividido em quatro tipos de diagramas, em que cada um possui um nível diferente de detalhes e público alvo. A ideia é que cada nível se aprofunde mais nos detalhes e informações do nível anterior.

## O que é o Horusec ?

Horusec é uma ferramenta de código aberto que realiza análise de código estático para identificar falhas de segurança durante o processo de desenvolvimento. Atualmente, as linguagens de análise disponíveis são: C#, Java, Kotlin, Python, Ruby, Golang, Terraform, Javascript, Typescript, Kubernetes, PHP, C, HTML, JSON, Dart, Elixir, Shell, Nginx, Swift.

A ferramenta possui ainda opções para pesquisar os principais vazamentos e falhas de segurança em todos os arquivos do seu projeto, bem como no histórico do Git. O Horusec pode ser usado por meio da CLI ou em esteiras de CI/CD.

<img src="https://horusec.io/site/horus-animation-1.gif" alt="usec-animation-cli" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">

<img src="https://horusec.io/site/static/67e40e4cf66a01b3cd5c68cb8089f911/ee604/example-illustration.png" alt="horusec-arquitecture" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">
