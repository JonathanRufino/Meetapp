<h1 align="center">Welcome to Meetapp Backend 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Backend module for the Rocketseat&#39;s Bootcamp challenge

## Install dependencies

```sh
yarn
```

## Usage

1. Rename the `.env.example` file to `.env`, or create a `.env` file, and fill it with your own credentials if necessary

2. Start containers

    `docker-compose up`

3. Create the database

    ```bash
    docker exec -it <postgres_container_id> psql -U postgres -c "create database meetapp"
    ```

4. Create database tables

    ```bash
    yarn sequelize db:migrate
    ```

5. You can access the application Swagger Docs on [http://localhost:3333/api-docs/](http://localhost:3333/api-docs/)

## Run tests

```sh
yarn test
```

## Author

👤 **Jonathan Rufino &lt;jonathanrufinopaiva@gmail.com&gt;**

* Github: [@JonathanRufino](https://github.com/JonathanRufino)

## Show your support

Give a ⭐️ if this project helped you !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
