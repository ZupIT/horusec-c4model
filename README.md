# **Horusec C4Model** 

## **Table of contents**
### 1. [**About**](#about)
### 2. [**Getting started**](#getting-started)
>#### 2.1.  [**Requirements**](#requirements)
### 3. [**Usage**](#usage)
>#### 3.1. [**Structure**](#structure)
### 4. [**Documentation**](#documentation)
### 5. [**Issues**](#issues)       
### 6. [**Contributing**](#contributing)
### 7. [**License**](#license)
### 8. [**Community**](#community)

## **About**

This project was created using [**c4builder**](https://adrianvlupu.github.io/C4-Builder/) to show Horusec's architecture. See below the tools we used:

- [**PlantUml**](http://plantuml.com/) creates diagrams from plain text.

- [**Markdown**](https://guides.github.com/features/mastering-markdown/) creates rich text documents from plain text.

- [**C4Model**](https://c4model.com/) the idea behind maps of your code.

- [**C4-PlantUML**](https://github.com/RicardoNiepel/C4-PlantUML) C4 syntax support for generating plantuml diagrams.

- [**vscode-plantuml**](https://github.com/qjebbs/vscode-plantuml) plugin for Visual Studio Code to view diagrams from design time.


## **Getting started**

### **Requirements**
Check out below the requirement to edit, run and build this project:

**1.** [**Node & NPM**](https://nodejs.org/en/)
  - Check installation run in your terminal `npm -v` and `node -v`

**2.** [**C4Builder**](https://adrianvlupu.github.io/C4-Builder/)
  - Check installation run in your terminal `c4builder`

**3.** [**Vscode-plantuml Plugin**](https://github.com/qjebbs/vscode-plantuml). 

- Add in your `settings.json` this configuration: 

```bash
    "plantuml.server": "http://127.0.0.1:8080",
    "plantuml.render": "PlantUMLServer"
```

## **Usage**
### **Structure**
- To run this project you can choose **`pt`** or **`en`** folder and run this command:

```bash
    make run
```

- Check the generated website at **https://localhost:3000**

### **Using in VSCode**

- To use in Visual Studio Code, you need up plantuml-server, see the example:

```bash
    docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat
```

### **Exporting UML in VSCode**

When you have **plantuml-server** running, type the commands below.

- To edit and view the current diagram, run: 

Press `ALT + D`

### **Abstractions used**

![**C4Model**](https://c4model.com/img/abstractions.png)

#### **Person**

They use your software system (as actors, roles, personas, etc). 

#### **Software System**

A software system is the highest level of abstraction and describes something that delivers value to its users, whether they are human or not. This includes the software system you are modeling, and the other software systems upon which your software system depends (or vice versa). 

#### **Container**

A container represents something that hosts code or data. A container is something that needs to be running in order for the overall software system to work. In real terms, a container is something like:

1. Server-side web application: 
- A Java EE web application running on Apache Tomcat.
- An ASP.NET MVC application running on Microsoft IIS.
- A Ruby on Rails application running on WEBrick, a Node.js application, etc.

2. Client-side web application: 
- A JavaScript application running in a web browser using Angular, Backbone.JS, jQuery, etc).

3. Client-side desktop application: 
- A Windows desktop application written using WPF.
- An OS X desktop application written using Objective-C.
- A cross-platform desktop application written using JavaFX, etc.
- A Mobile app: An Apple iOS app, an Android app, a Microsoft Windows Phone app, etc.

4. Server-side console application: A standalone (e.g. "public static void main")


#### **Component**

In this context, a component is a group of related functionality encapsulated behind a well-defined interface. 
If you're using a language like Java or C#, the simplest way to think of a component is that it's a collection of implementation classes behind an interface. 
The aspects such as how those components are packaged (e.g. one component vs many components per JAR file, DLL, shared library, etc) is a separate and orthogonal concern.

All components inside a container typically execute in the same process space.

## **Documentation**
You can find Horusec's documentation on our [**website**](https://horusec.io/docs/).

## **Issues**

To open or track an issue for this project, in order to better coordinate your discussions, we recommend that you use the [**Issues tab**](https://github.com/ZupIT/horusec/issues) in the main [**Horusec**](https://github.com/ZupIT/horusec) repository.

## **Contributing**

Feel free to use, recommend improvements, or contribute to new implementations.

Check out our [**contributing guide**](https://github.com/ZupIT/horusec/blob/main/CONTRIBUTING.md) to learn about our development process, how to suggest bugfixes and improvements. 

## **License**
 [**Apache License 2.0**](https://github.com/ZupIT/horusec-c4model/blob/main/LICENSE).

## **Community**

Feel free to reach out to us at:

- [**GitHub Issues**](https://github.com/ZupIT/horusec/issues)
- If you have any questions or ideas, let's chat in our [**Zup Open Source Forum**](https://forum.zup.com.br).
