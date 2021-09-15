# c3

![diagram](c3.svg)

# C4Model Horusec-VsCode - C3

## Descrição

Tendo a extensão instalada no editor, vs-code, o usuário tem em sua disposição, as principais funcionalidades da horusec-cli através do vs-code.

Antes mesmo de iniciar uma análise, pode ser feita a configuração da horusec-cli através da opção "Settings" na interface da extensão. Ao acionar esse comando, é exibida uma lista de seleção das configurações da horusec-cli, após selecionar uma delas, é exibido uma caixa de texto para informar o valor referente. Essas configurações serão escritas no arquivo de configuração da horusec-cli, então após a definição da configuração é verificado se existe o arquivo de configurações da horusec-cli dentro do código fonte que esta aberto. Caso não exista, é criado um arquivo chamado "horusec-config.json" na raiz do projeto em questão. Se existir, ou logo após ter criado o arquivo, o valor da configuração é escrita neste arquivo.

Ao iniciar uma análise, o primeiro passo é verificar se existe uma análise em execução, se houver, o usuário será informado para aguardar a análise em execução finalizar para iniciar uma nova. Caso não houver uma análise em execução, é realizado o download do da imagem docker da horusec-cli e um volume docker para compartilhar as informações entre o container e a extensão vs-code. Ao finalizar a análise, a extensão faz a leitura do resultado em um arquivo JSON no volume docker criado anteriormente, nele consta as vulnerabilidades encontradas no código fonte. É exibida uma mensagem no vs-code informando o fim da análise e quantidade de vulnerabilidades encontradas. Com as vulnerabilidades reportadas, a extensão localiza o trecho de código vulnerável e o sinaliza.

O usuário tem a opção de parar uma análise através do comando "Stop". Ao ser acionado, este comando verifica se realmente tem uma análise em execução, se não houver, é exibida uma mensagem informado que não há nenhuma análise rodando no momento. Caso seja acionado o comando "Stop" e realmente houver uma análise rodado, é executado o comando para parar e remover o container da horusec-cli.
