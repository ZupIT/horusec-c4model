## Overview

By definition, software architecture is the technological strategy of a product and / or service, defining the parts that make up a system. And, like every strategy, it is critical that it is constantly updated, after all, a non-viewing planning will tend to be flawed.

Documenting the architecture of a project will often be a dull process and that requires time, knowledge of tools and techniques for diagramming and documentation. The biggest challenge within an architecture documentation is to avoid two scenarios:

1. Very complex architecture documentation and that, therefore, tend to stalk and obsolete, losing its purpose. In other words: it spends plenty of time for documentation that tends to be unusable eventually.

2. Poor documentation with low information or failure information.

In both cases, the end result is that they end up disturbing more than helping.

The visualization of architecture is crucial in several aspects and responds to several questions, for example: "How does my system integrate with other systems? How can I climb my application? How to ensure security between my applications?", Among other points .

This was our motivation to develop the C4 Model, that is, that of a visualization of our architecture in a very simple and effective way.

## What is C4Model?

The C4 Model is based on 4 + 1 and UML and was created by Simon Brown between 2006 and 2011. The model emerged with the intention of helping to solve the problem of documentation of flaws or difficult to understand and maintain, bringing a more Clara of the architecture documented by covering several levels and that is relevant to the various "personas" involved.

It is divided into four types of diagrams, where each has a different level of details and target audience. The idea is that each level is further deepen in the details and information of the previous level.

## What is Horusec?

Horusec is an open source tool that performs static code analysis to identify security failures during the development process. Currently, analysis languages ​​available are: C #, Java, Kotlin, Python, Ruby, Golang, Terraform, Javascript, Typscript, Kubbernetes, PHP, C, HTML, JSON, Dart, Elixir, Shell, Nginx, Swift.

The tool also has options for searching the main leaks and security failures in all files in your project as well as in the GIT history. Horusec can be used through CLI or CI / CD mats.

<img src="https://raw.githubusercontent.com/ZupIT/horusec/main/assets/usage_horusec.gif" alt="usec-animation-cli" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">

<img src="https://raw.githubusercontent.com/ZupIT/horusec/main/assets/horusec-complete-architecture.png" alt="horusec-arquitecture" style="width: 40%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">
