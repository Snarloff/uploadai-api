# Upload.ia - API

<video width="400" height="500" src="https://github.com/Snarloff/uploadai-web/assets/46792575/d5bfad10-5fe4-4b96-86a6-154b1e229eac" type="video/mp4" controls>
</video>

Este é o repositório da parte da API do projeto Upload.ia, que faz parte das séries de vídeos da NLW da Rocketseat. A API do Upload.ia é responsável por receber os arquivos de áudio otimizados da parte web, configurar prompts e realizar operações de transcrição e geração de sugestões usando as APIs Whisper e Completions da OpenAI.

## Visão Geral

A API do Upload.ia trabalha em conjunto com a parte web do projeto, recebendo os arquivos de áudio otimizados, configurando prompts para transcrição e utilizando as APIs Whisper e Completions da OpenAI para realizar operações de processamento de linguagem natural.

### Principais Funcionalidades

- Recebimento de arquivos de áudio otimizados da parte web.
- Configuração de prompts para transcrição de áudio.
- Transcrição de áudio usando o Whisper da OpenAI.
- Geração de sugestões de título ou descrição usando o GPT-3.6 Turbo 16k da OpenAI.

### Tecnologias Utilizadas

A API do projeto Upload.ia utiliza as seguintes tecnologias e pacotes:

- [Fastify](https://www.fastify.io/): Um framework web rápido e eficiente.
- [Fastify Multipart](https://github.com/fastify/fastify-multipart): Plugin Fastify para lidar com requisições multipart/form-data.
- [Prisma](https://www.prisma.io/): Uma camada de acesso a dados para Node.js e TypeScript.
- [SQLite](https://www.sqlite.org/): Um sistema de gerenciamento de banco de dados leve.
- [Zod](https://github.com/colinhacks/zod): Uma biblioteca de validação de dados.
- [Chalk](https://github.com/chalk/chalk): Uma biblioteca para estilização do terminal.
- [ESLint](https://eslint.org/): Linter para JavaScript/TypeScript.
- [Prettier](https://prettier.io/): Formatador de código.
- [@snarloff/eslint-config](https://www.npmjs.com/package/@snarloff/eslint-config): Pacote de configuração ESLint personalizado.

### Instruções de Uso

Siga os passos abaixo para configurar o projeto da API em sua máquina:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/uploadia-api.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd uploadia-api
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```
O servidor da API estará disponível em `http://localhost:3001`.

### Configuração do Prisma

A API utiliza o Prisma para o acesso ao banco de dados SQLite. Certifique-se de configurar as variáveis de ambiente corretas e executar as migrações do Prisma antes de iniciar a API.

```shell
npx prisma generate
```

### Referência à Parte Web

A parte web do projeto "Upload.ia" está localizada no repositório da parte [web](https://github.com/Snarloff/uploadai-web). Certifique-se de consultar o README da parte web para obter informações sobre o frontend da aplicação e como configurar a parte web.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar problemas ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Agradecimentos

Agradecemos à Rocketseat por fornecer o conhecimento e os recursos para o desenvolvimento deste projeto.

