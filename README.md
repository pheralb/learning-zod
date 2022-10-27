<hr />

**Template:**
- [Introduction](#🪐-introduction).
- [Getting Started](#👨‍🚀-getting-started).
- [Requests](#🚀-requests).

**Snippets:**
- [Validations](#✔️-validations).
- [Zod Error](#📚-zod-error).

<hr />

## 🪐 Introduction

[Zod](https://zod.dev/) is a **TypeScript-first** schema declaration and validation library. They're using the term _"schema"_ to broadly refer to any data type, from a simple string to a complex nested object.

- [More information about Zod](https://zod.dev/?id=introduction).

## 👨‍🚀 Getting Started

This repository includes a **REST api template** created with:

- **Express**: 4.18.2
- **Typescript**: 4.8.4
- **ts-node-dev**: 2.0.0
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

| -   | Method   | Url    | Query Parameters                                       |
| --- | -------- | ------ | ------------------------------------------------------ |
| 📋  | **POST** | /login | `{email: "hello@world.com", password:"mypassword123"}` |
| 📋  | **GET**  | Text   | -                                                      |

## ✔️ Validations

### Login example schema:

```ts
const loginSchema = z.object({
  email: z.string().email({
    message: "Write a correct email address",
  }),
  password: z.string().min(6, {
    message: "Password too short",
  }),
});
```

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