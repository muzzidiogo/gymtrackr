# GymTrackr
Trabalho Prático para a disciplina de Engenharia de Software da UFMG (2025/1)

## Membros
- Diogo Muzzi (Backend)
- Elias Nacif (Fullstack)
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
### 1. Como usuário eu gostaria de fazer meu cadastro. (CRUD Cadastro)
* Modelar tabela usuarios no SQLite (campos: id, nome, email, senha_cripto) [Diogo - Backend]
* Criar rota POST /cadastro no Flask (validação de e-mail/senha) [João - Backend]
* Implementar criptografia de senha com bcrypt [Diogo - Backend]
* Criar tela de cadastro em Next.js (formulário + validação frontend) [Elias - Fullstack]
* Conectar frontend à API (axios/fetch) [Elias - Fullstack]
* Testes manuais: fluxo completo de cadastro [Gabriel - Testes]
  
### 2. Como usuário eu gostaria de criar, editar e excluir uma sessão de treino selecionando exercícios a partir de um banco de dados pré definido. (CRUD Sessão)
* Modelar tabelas sessoes e exercicios (relação 1:N) [Diogo - Backend]
* Criar rotas CRUD no Flask [João - Backend]
* Popular banco com exercícios pré-definidos (ex: "Supino Reto") [Gabriel - Dados]
* Criar interface de sessões em Next.js (lista + formulário) [Elias - Fullstack]
* Implementar seleção de exercícios (dropdown com busca) [Elias - Fullstack]
* Testes: criar/editar/excluir sessão com exercícios [Gabriel - Testes]

### 3. Como usuário eu gostaria de iniciar uma sessão de treino com um cronômetro automático para medir o tempo total da sessão.
* Adicionar campo tempo_total na tabela sessoes [Diogo - Backend]
* Criar rota PATCH /sessoes/:id/iniciar (registra datetime de início) [João - Backend]
* Desenvolver componente de cronômetro em Next.js (useState + useEffect) [Elias - Fullstack]
* Integrar cronômetro com rota de atualização do tempo [Elias - Fullstack]
* Estilizar cronômetro (CSS animado) [Gabriel - Frontend]
* Testes: iniciar/pausar/finalizar cronômetro [Gabriel - Testes]
  
### 4. Como usuário eu gostaria de registrar séries, repetições e peso para cada exercício de um treino.
