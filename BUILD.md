# **BUILD**

## **Table of contents** 
### 1. [**About**](#about)
### 2. [**Environment**](#environment)
### 3. [**Development**](#development)
>#### 3.1. [**Install and Run**](#install-and-run)
>#### 3.2. [**Development with Visual Studio Code**](#development-with-visual-studio-code)
>#### 3.3. [**Style Guide**](#style-guide)
### 4. [**Production**](#production)       

## **About**

The **BUILD.md** is a file to check the environment and build specifications of **horusec-c4model** project.


## **Environment**

- [**NodeJS**](https://nodejs.org/en/): ^16.X
- [**Yarn**](https://yarnpkg.com/): ^1.20.X
- [**GNU Make**](https://www.gnu.org/software/make/): ^4.2.X
- [**C4Build**](https://github.com/adrianvlupu/C4-Builder): ^0.2.5
- [**Graphviz**](https://graphviz.org/download/): ^2.49.X
- [**Docker**](https://www.docker.com/get-started): ^20.10.X
- [**PlantUML-vscode**](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml): ^2.16.X

## **Development**

Horusec's C4Model has two languages: [**Portuguese**](./pt-br) and [**English**](./en).

### **Install and Run**

Access the directory of the language you want to work with:

_**Example:**_

```bash
cd pt-br/
```

And then run the command below:

```bash
make run
```

The web server will be available at the address: `http://localhost:3000`

### **Development with Visual Studio Code**

You can use the text editor [**Visual Studio Code**](https://code.visualstudio.com) to assist in the development of this project.

In the `.vscode` directory, create a file called `settings.json` and apply these settings:

```json
"plantuml.server": "http://127.0.0.1:8080",
"plantuml.render": "PlantUMLServer"
```

And then run the following command to create a docker container of [**plantuml-server**](https://plantuml.com/server):

```bash
make up plantuml
```

So, when editing the `.puml` files, you can get a preview through Visual Studio Code by running the shortcut:

```keyboard
ALT+D
```

### **Style Guide**

All project files must have the [**license header**](./copyright.txt). You can check if all files are in agreement by running the following command in project root:

```bash
make license
```

If it is necessary to add the license in any file, run the command below to insert it in all files that do not have it:

```bash
make license-fix
```

## **Production**

To generate a production build, run the command below at the root of the project:

```bash
make build
```

A directory named `docs` will be generated in the paths `pt-br/` and `en/`, it will contain the compiled project ready to be hosted on a web server.
