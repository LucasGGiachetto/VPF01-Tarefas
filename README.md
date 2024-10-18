# VPF01-Tarefas
Projeto: API Simples de Gerenciamento de Tarefas, Desenvolvimento de uma API RESTful básica que permita criar, listar e deletar as tarefas. 

Linguagens e ferramentas utilizadas:
- Node.js
- Visual Studio
- Mysql (Xampp)
- Insomnia

## Passo a Passo: Como Adicionar Tarefas à API
### 1. Configuração do Ambiente
Antes de começar, certifique-se de que você tem o ambiente configurado:

- Node.js instalado.
- MySQL (ou XAMPP) configurado e rodando.
- Insomnia ou outro cliente HTTP para testar a API.

- Instale as dependências:

```node
npm install express mysql2 body-parser
```

### 2. Estrutura do Projeto
Certifique-se de que o projeto está rodando corretamente. O código do projeto está no arquivo Server.js.

### 3. Iniciando o Servidor
- Abra o terminal.
- Navegue até o diretório do seu projeto.
- Execute o comando:

```bash
node server.js
```

### 4. Testando a API com Insomnia
4.1. Criar uma Nova Tarefa
- Abra o Insomnia.
- Crie uma nova requisição:
- Clique no botão de "+" e escolha "New Request".
- Nomeie a requisição (por exemplo, "Adicionar Tarefa") e escolha o método POST.
- Insira a URL: Digite: http://localhost:3000/tarefas/bulk.
- Configurar o Corpo da Requisição:
- Selecione a opção "JSON" no corpo da requisição.
- Insira o seguinte JSON:

  ```json
  [
    {
        "title": "Nome da tarefa",
        "description": "Descrição da tarefa",
        "created_by": "Nome da pessoa que cadastrou a tarefa"
    }
  ]
  ```

- Enviar a Requisição:
- Clique em "Send" para enviar a requisição.

4.2. Verificando a Resposta
Se tudo estiver tudo certo, você verá uma resposta como:

```json
  {
    "insertedIds": 1
  }
  ```

Isso indica que a tarefa foi criada com sucesso. O número 11 representa o ID da tarefa inserida.

### 5. Listando as Tarefas
Para verificar se a tarefa foi adicionada:

- Crie uma nova requisição no Insomnia.
- Selecione o método GET.
- Insira a URL: http://localhost:3000/tarefas.
- Clique em "Send" para listar todas as tarefas.

### 6. Deletando uma Tarefa
Para deletar uma tarefa específica:

Crie uma nova requisição no Insomnia.
Selecione o método DELETE.
Insira a URL: http://localhost:3000/tarefas/{1} (substitua {1} pelo ID da tarefa que você deseja deletar).
Não adicione um corpo à requisição.
Clique em "Send".

