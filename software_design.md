# App

Gympass style app.

## Requisitos funcionais (RFs): O que vai ser possível o usuário fazer em nossa aplicação

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia

## Regras de negócio (RN): Caminhos que cada requisito pode tomar. São condições associadas aos requisitos funcionais

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer dois check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O check-in só pode ser validado por admnistradores;
- [] A academia só pode ser cadastrada por admnistradores;

## Requisitos não-funcionais (RFNs): não tem relação com a parte funcional da aplicação

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar páginadas com 20 itens por página;
- [] O usuário deve ser identificado por um JWT (JSON Web Token);

## TDD -> Test-driven Development
