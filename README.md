## POC Padrão Observer com Kafka
## Estrutura de Pastas

- `src`: Pasta raiz do código-fonte da aplicação.
  - `domain`: Contém as entidades de domínio relacionadas ao Observer.
  - `repositories`: Contém os repositórios que lidam com o armazenamento e a manipulação dos dados do Observer.
  - `usecases`: Contém os casos de uso da aplicação.
  - `presentation`: Contém a lógica de apresentação da aplicação.
- `index.js`: Arquivo de entrada principal para executar a aplicação.

## Entendendo os Métodos Principais

- `Observer.js`: Classe que representa o observador no padrão Observer. Possui um método `update()` para receber notificações.
- `Subject.js`: Classe que representa o assunto (ou sujeito) no padrão Observer. Possui métodos para adicionar, remover e notificar observadores.
- `SubjectRepository.js`: Repositório que armazena os observadores e lida com a interação entre os observadores e o assunto.
- `NotificationService.js`: Serviço que coordena a notificação dos observadores através do `SubjectRepository`.
- `KafkaService.js`: Serviço que lida com a comunicação com o Kafka, consumindo mensagens e notificando os observadores através do `SubjectRepository`.
- `main.js`: Arquivo de exemplo que cria os objetos, adiciona observadores, notifica eventos e publica mensagens no Kafka.

## Testando a Aplicação

Siga estes passos para testar a aplicação:

1. Certifique-se de ter o Kafka configurado e em execução no seu ambiente local.
2. Instale as dependências executando `npm install` na raiz do projeto.
3. Inicie a aplicação executando `node index.js`.
4. Observe as mensagens sendo exibidas no terminal, indicando que os observadores estão recebendo as notificações e consumindo as mensagens do Kafka.
5. Edite o arquivo `main.js` para adicionar ou remover observadores, modificar os eventos notificados ou publicar mensagens no Kafka.
6. Reinicie a aplicação para ver as alterações refletidas.

## Pré-requisitos para executar esta aplicação:

Node.js: versão que utilizei é a 16.

Kafka: Devidamente configurado na máquina.

Configurações do Kafka: 
Para criar o tópico utilizado nessa aplicação:
`bin/kafka-topics.sh --create --topic notification-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1`

 
