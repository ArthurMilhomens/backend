# App

Magic league app

## RFs (Requisitos Funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autentitcar;
- [ ] Deve ser possivel obter o perfil de um usuário logado;
- [ ] Deve ser possivel o usuário cadastrar decks;
- [ ] Deve ser possivel o usuário visualizar seus decks;
- [ ] Deve ser possivel o usuário visualizar o seu historico de partidas;
- [ ] Deve ser possivel visualizar o perfil de outros usuários;
- [ ] Deve ser possivel cadastrar novos torneios;
- [ ] Deve ser possivel visualizar torneios;
- [ ] Deve ser possivel visualizar o histórico torneios;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não deve poder cadastrar dois decks com o mesmo nome;
- [ ] O usuário não deve poder cadastrar dois torneios com o mesmo nome;
- [ ] As pontuações dos torneios só podem ser registradas pelo criador do torneio;

## RFs (Requisitos Não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] O usuário deve ser identificado por um JWT;
- [ ] Os dados da aplicação precisam estar presistidos em um banco PostgreSQL;
- [ ] As listas de Decks e torneios precisam estar paginadas com 10 itens por página;