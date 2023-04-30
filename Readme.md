
# Ts-Template-Api

This is an API template made with express and typescript, to speed up your development, it contains repositories and generic services for the typical CRUD actions, based on a Sequelize model, we use it for data persistence


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

## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors

- [@ImRLopez](https://www.github.com/imrlopezag)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://imrlopez.dev)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/angel-gabriel-lopez/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imr_lopez)




## Tech Stack


**Server:** Node, Express

**ORM:** Sequelize

