<div align="center">

<img src="./assets/logo.svg" width="130px">
<h1>Learning Zod</h1>

![GitHub stars](https://img.shields.io/github/stars/pheralb/learning-zod)
![GitHub issues](https://img.shields.io/github/issues/pheralb/learning-zod)
![GitHub license](https://img.shields.io/github/license/pheralb/learning-zod)
[![Required Node.JS +16](https://img.shields.io/static/v1?label=node&message=16&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

</div>

**Template:**

- [Introduction](#-introduction).
- [Getting Started](#-getting-started).
- [Requests](#-requests).

**Snippets:**

- [Validations](#-validations).
- [Zod Error](#-zod-error).

**Tutorials:**

- 🥳 [Typescript REST API Validations with Zod by Fazt Code](https://youtu.be/TAVaAxWmzSg).

<hr />

## 🪐 Introduction

[Zod](https://zod.dev/) is a **TypeScript-first** schema declaration and validation library. They're using the term _"schema"_ to broadly refer to any data type, from a simple string to a complex nested object.

- [More information about Zod](https://zod.dev/?id=introduction).

## 👨‍🚀 Getting Started

This repository includes a **REST api template** created with:

- **Express**: 4.18.2
- **Typescript**: 4.8.4
- **ts-node-dev**: 2.0.0
- **tsconfig-paths**: 4.1.0
- **Zod**: 3.19.1
- **SWC**: 0.1.57 (cli) & 1.3.11 (core).

And you will need to install [Nodejs (+v18 LTS recommended)](https://nodejs.org/en/) and a code editor, for example, [Visual Studio Code](https://code.visualstudio.com/).

1. Clone the repository:

```bash
git clone git@github.com:pheralb/learning-zod.git
```

2. Install dependencies:

```bash
cd learning-zod
npm install
```

- **Note**: You can use [pnpm](https://pnpm.io/) or [Ultra](https://ultrapkg.dev/).

3. Run the development server:

```bash
npm run dev
```

By default, learning-zod is running on the port `3000`. You can change the port here.

**🔭 Commands:**

- `npm run dev` - Run the development server using ts-node-dev.
- `npm run build` - Build your rest api with [SWC](https://swc.rs/). It's very fast 😉.
- `npm run build-tsc` - If you have problems compiling with SWC, this command compiles the project with tsc.

## 🚀 Requests

| -   | Method   | Url                             | -           | Query Parameters                                       |
| --- | -------- | ------------------------------- | ----------- | ------------------------------------------------------ |
| 📋  | **POST** | /login                          | Body - Json | `{email: "hello@world.com", password:"mypassword123"}` |
| 📋  | **PUT**  | /products/1232?title=helloworld | Body - Json | `{name: "iPhone", price:900}`                          |

## ✔️ Validations

### Login example schema:

```ts
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email({
      message: "Write a correct email address",
    }),
    password: z.string().min(6, {
      message: "Password too short",
    }),
  }),
});
```

<details>
<summary>🤔 Test 1 - Method: POST.</summary>

**URL**: http://localhost:3000/login

- JSON body:

```json
{
  "email": 11,
  "password": []
}
```

- Response:

```json
[
  {
    "field": ["email"],
    "message": "Expected string, received number"
  },
  {
    "field": ["password"],
    "message": "Expected string, received array"
  }
]
```

</details>

<details>
<summary>🤔 Test 2 - Method: POST.</summary>

**URL**: http://localhost:3000/login

- JSON body:

```json
{
  "email": "abc",
  "password": "123456gg"
}
```

- Response:

```json
[
  {
    "field": ["email"],
    "message": "Write a correct email address"
  }
]
```

</details>

### Product example schema:

```ts
const productSchema = z.object({
  name: z.string().min(3, { message: "Name too short" }),
  price: z.number().min(0, { message: "Price must be positive" }),
});
```

<details>
<summary>🤔 Test 1 - Method: POST.</summary>

**URL**: http://localhost:3000/products

- JSON body:

```json
{}
```

- Response:

```json
[
  {
    "field": ["name"],
    "message": "Required"
  },
  {
    "field": ["price"],
    "message": "Required"
  }
]
```

</details>

<details>
<summary>🤔 Test 2 - Method: POST.</summary>

**URL**: http://localhost:3000/products

- JSON body:

```json
{
  "name": "iPhone",
  "price": "33"
}
```

- Response:

```json
[
  {
    "field": ["price"],
    "message": "Expected number, received string"
  }
]
```

</details>

### Update product example schema:

```ts
export const updateSchema = z.object({
  name: z.string(),
  price: z.number().min(0, { message: "Price must be positive" }).optional(),
});
```

<details>
<summary>🤔 Test 1 - Method: PUT.</summary>

**URL**: http://localhost:3000/products/1

- JSON body:

```json
{
  "name": "iPhone",
  "price": 30
}
```

- Response:

```json
[
  {
    "field": ["params", "id"],
    "message": "String must contain at least 3 character(s)"
  }
]
```

</details>

## 📚 Zod Error:

In the schema we request that a field is of type **"string"**, for example, _username_:

```ts
const mySchema = z.object({
  username: z.string(),
});
```

If we introduce a **number** in _username_ field, Zod returns the following:

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "number",
      "path": ["username"],
      "message": "Expected string, received number"
    }
  ],
  "name": "ZodError"
}
```

## 🔑 License

- [MIT](https://github.com/pheralb/learning-zod/blob/main/LICENSE).
