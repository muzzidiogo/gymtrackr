# GymTrackr 
Trabalho Prático para a disciplina de Engenharia de Software da UFMG (2025/1)

## Membros
- Diogo Muzzi (Backend)
- Elias Nacif (Frontend)
- João Fernando (Backend)
- Gabriel Silva (Fullstack)

## Tecnologias
- Backend: Flask (Python)
- FrontEnd: Next.js (Javascript)
- Banco de Dados: SQLite
 
## Objetivo
O aplicativo tem como objetivo principal proporcionar aos usuários uma forma eficiente e intuitiva de registrar e acompanhar seus treinos na academia. Ele permitirá o cadastro de sessões de treino, incluindo exercícios, séries, repetições e peso utilizado, garantindo um acompanhamento detalhado da progressão ao longo do tempo. Para tornar a experiência mais prática, o aplicativo contará com um banco de dados pré-definido de exercícios, além da opção de adicionar novos exercícios personalizados. Um cronômetro automático ajudará os usuários a monitorar a duração total da sessão de treino, enquanto um temporizador específico para descanso entre séries garantirá um controle adequado dos intervalos. Além disso, os usuários poderão acessar um histórico detalhado de seus treinos passados, possibilitando análises sobre o desempenho e ajustes na rotina de treinamento. A funcionalidade de gráficos permitirá uma visualização clara da progressão de carga ao longo do tempo, incentivando a evolução contínua. O aplicativo também terá uma interface intuitiva e responsiva para facilitar o uso durante os treinos. Por fim, será possível compartilhar treinos com outros usuários, promovendo interação e troca de experiências dentro da comunidade.


## Backlog do Produto (user stories)
- Como usuário eu gostaria de fazer meu cadastro. (CRUD Cadastro)
- Como usuário eu gostaria de criar, editar e excluir uma sessão de treino selecionando exercícios a partir de um banco de dados pré definido. (CRUD Sessão)
- Como usuário eu gostaria de iniciar uma sessão de treino com um cronômetro automático para medir o tempo total da sessão.
- Como usuário eu gostaria de registrar séries, repetições e peso para cada exercício de um treino.
- Como usuário eu gostaria de adicionar exercícios personalizados.
- Como usuário eu gostaria de marcar um temporizador de descanso entre as séries.
- Como usuário eu gostaria de ver meu histórico passado com datas e desempenho.
- Como usuário eu gostaria de compartilhar meus treinos com outros usuários.
- Como usuário eu gostaria de fazer amigos com outros usuários.  
- Como usuário eu gostaria de ter um leaderboard com meus amigos.

## Backlog do Sprint
### Pré-requisitos: 
#### 1. Configuração do ambiente de desenvolvimento
| Tarefas |
|--------------------|
| Instalar Python e configurar um ambiente virtual (venv) para o backend. | 
| Instalar Flask e outras dependências necessárias (pip install flask sqlite3 flask-cors etc.). | 
| Instalar Node.js e configurar o ambiente do frontend. | 
| Instalar Next.js e bibliotecas essenciais (npm install next react react-dom). | 
| Instalar SQLite para o banco de dados e configurar a estrutura inicial. |

#### 2. Criar interface inicial do sistema
| Tarefa | Responsável |
|--------|------------|
| Criar estrutura básica da interface inicial do sistema | Elias Nacif |
| Integrar com backend para autenticação e navegação | Diogo Muzzi |
| Testar funcionalidade da interface inicial | Gabriel Silva |
  

### História #1: Como usuário, eu gostaria de fazer meu cadastro (CRUD Cadastro).
| Tarefa | Responsável |
|--------|------------|
| Criar o modelo de usuário no banco de dados | João Fernando |
| Implementar rotas de criação, edição e remoção de usuários no backend | João Fernando |
| Criar API para comunicação do frontend com o backend | Diogo Muzzi |
| Criar interface de cadastro no frontend | Elias Nacif |
| Criar interface da página inicial | Elias Nacif |
| Implementar validação de entrada no frontend e backend | Diogo Muzzi |
| Testar fluxo completo de cadastro, edição e remoção | Gabriel Silva |

### História #2: Como usuário, eu gostaria de criar, editar e excluir uma sessão de treino selecionando exercícios a partir de um banco de dados pré-definido (CRUD Sessão).
| Tarefa | Responsável |
|--------|------------|
| Criar o modelo de sessão de treino no banco de dados | João Fernando |
| Implementar rotas para criação, edição e remoção de sessões no backend | João Fernando |
| Criar API para comunicação do frontend com o backend | Diogo Muzzi |
| Criar interface para manipulação de sessões de treino no frontend | Elias Nacif |
| Desenvolver funcionalidade de seleção de exercícios a partir do banco de dados | Diogo Muzzi |
| Testar fluxo completo de criação, edição e remoção de sessões de treino | Gabriel Silva |

### História #3: Como usuário, eu gostaria de iniciar uma sessão de treino com um cronômetro automático para medir o tempo total da sessão.
| Tarefa | Responsável |
|--------|------------|
| Criar estrutura no frontend para exibir cronômetro | Elias Nacif |
| Implementar lógica do cronômetro no frontend | Elias Nacif |
| Criar API para salvar e recuperar tempos de treino | João Fernando |
| Integrar cronômetro ao fluxo de treino no frontend | Elias Nacif |
| Testar funcionalidade do cronômetro e integração com backend | Gabriel Silva |

### História #4: Como usuário, eu gostaria de registrar séries, repetições e peso para cada exercício de um treino.
| Tarefa | Responsável |
|--------|------------|
| Criar estrutura no banco de dados para armazenar séries, repetições e peso | João Fernando |
| Implementar rotas para salvar e recuperar dados de treino no backend | João Fernando |
| Criar API para comunicação do frontend com o backend | Diogo Muzzi |
| Desenvolver interface para entrada de dados durante o treino | Elias Nacif |
| Testar fluxo completo de registro e recuperação de séries e pesos | Gabriel Silva |