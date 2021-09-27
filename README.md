# C4Model - Horusec

## Introduction

This project was created using [c4builder](https://adrianvlupu.github.io/C4-Builder/)

Take a look at

- [vscode-plantuml](https://github.com/qjebbs/vscode-plantuml) plugin for visual studio code to view diagrams at design time

- Add in your `settings.json` this configs

```bash
    "plantuml.server": "http://127.0.0.1:8080",
    "plantuml.render": "PlantUMLServer"
```

## Getting started

### Requirements

- [c4builder](https://github.com/adrianvlupu/C4-Builder)
- [graphviz](https://graphviz.org/download)

For run this project you can choice `pt` or `en` folder and run this command:

```bash
    make run
```

And see site generated in **https://localhost:3000**:

### Usage in VsCode

- For usage in visual studio code is necessary up plantuml-server, up with this example:

```bash
    docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat
```

### Exporting UML in VsCode

With plantuml-server running type this commands:

- For edit and view current diagram you can run this command in visual studio code commands:

- Press `ALT + D`

### Abstractions used

![C4Model](https://c4model.com/img/abstractions.png)

#### Person

However you think about your users (as actors, roles, personas, etc), people are the various human users of your software system. 

#### Software System

A software system is the highest level of abstraction and describes something that delivers value to its users, whether they are human or not. This includes the software system you are modelling, and the other software systems upon which your software system depends (or vice versa). 

#### Container

A container represents something that hosts code or data. A container is something that needs to be running in order for the overall software system to work. In real terms, a container is something like:

- Server-side web application: A Java EE web application running on Apache Tomcat, an ASP.NET MVC application running on Microsoft IIS, a Ruby on Rails application running on WEBrick, a Node.js application, etc.

- Client-side web application: A JavaScript application running in a web browser using Angular, Backbone.JS, jQuery, etc).

- Client-side desktop application: A Windows desktop application written using WPF, an OS X desktop application written using Objective-C, a cross-platform desktop application written using JavaFX, etc.
- Mobile app: An Apple iOS app, an Android app, a Microsoft Windows Phone app, etc.

- Server-side console application: A standalone (e.g. "public static void main")

- etc

#### Component

The word "component" is a hugely overloaded term in the software development industry, but in this context a component is simply a grouping of related functionality encapsulated behind a well-defined interface. If you're using a language like Java or C#, the simplest way to think of a component is that it's a collection of implementation classes behind an interface. Aspects such as how those components are packaged (e.g. one component vs many components per JAR file, DLL, shared library, etc) is a separate and orthogonal concern.

An important point to note here is that all components inside a container typically execute in the same process space.