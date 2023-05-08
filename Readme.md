
# Ts-Template-Api

This is an API template made with express and typescript, to speed up your development, it contains repositories and generic services for the typical CRUD actions, based on a Sequelize model, we use it for data persistence

```
ORM: Sequelize
Language: Typescript
Framework: Express
Database: vercel/mongodb
Deploy: Vercel,
Auth: JWT
Documentation: Swagger
```
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub Last Commit](https://img.shields.io/github/last-commit/ImRLopezAG/Forget-Project)

### 🛠️ Tools

[![Node](https://img.shields.io/badge/Node-339933?logo=node.js&logoColor=white)](https://nodejs.org/es/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/es/)
[![Typescript](https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)](https://sequelize.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)](https://swagger.io/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
[![Eslint](https://img.shields.io/badge/Eslint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
![Ts-Standard](https://img.shields.io/badge/Ts--Standard-3178C6?logo=typescript&logoColor=white)

## Installation


```bash
 git clone https://github.com/ImRLopezAG/Ts-Api-Template.git

 cd my-project
 npm install my-project

 cd my-project
 yarn install my-project

 cd my-project
 pnpm install my-project

 you need to configure .env file like the .env.dev  also you can add your configuration
```
    
## API Reference

### Authenticate with JWT

```
  Post /api/Auth/Login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. username |
| `password` | `string` | **Required**. password |


#### Get all items

```
  GET /api/Entity/List
```

#### Get item

```
 GET /api/Entity/Get/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post item

```
 Post /api/Entity/Create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Entity Properties`      | `Entity` | **Required**. properties of item to fetch |

#### Update item

```
 Put /api/Entity/Update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Entity Properties`      | `Entity` | **Required**. properties of item to put |

#### Delete item

```
 Delete /api/Entity/Delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

## Users

### Get Users

```
  GET /api/User/List
```


### Get User

```
  GET /api/User/Get/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
### Get User by email

```
  GET /api/User/email/${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Id of item to fetch |
### Get User by username

```
  GET /api/User/username/${username}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Id of item to fetch |


### Add User

```
  Post /api/User/Create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**.  |
| `username`      | `string` | **Required**.  |
| `password`      | `string` | **Required**.  |

### Update User

```
  Put /api/User/Update/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**.  |
| `username`      | `string` | **Required**.  |
| `password`      | `string` | **Required**.  |

### Delete User

```
  Delete /api/User/Delete/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors

- [@ImRLopez](https://www.github.com/imrlopezag)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://imrlopez.dev)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/angel-gabriel-lopez/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imr_lopez)


