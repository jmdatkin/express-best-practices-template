# Express Best Practices Template

A modular and maintainable template demonstrating best practices in a simple Express.js app. See [https://tinyurl.com/4ykn8m9f](https://tinyurl.com/4ykn8m9f) for the full guide.

# Features
## Directory Structure 📁
Files are organized into **services** and **routers**.
+ Services abstract the database connection from the rest of the application.
+ Routers deal with extracting data from `req` and validating it.

## External Dependencies ⚙️
The `better-sqlite3` database client is initialized in its own file. This has several benefits:
+ Avoids clutter in `index.ts`.
+ Provides a dedicated file for additional config/setup if necessary.
+ Provides a centralized location for other modules to import the database client.

## Clean `index.ts` ✨
`index.ts` is left lightweight and is dedicated solely to bootstrapping the Express application.
Middleware and routers can be added and removed and the file remains readable and organized.

## TypeScript ❤️
Uses [TypeScript](https://www.typescriptlang.org/) for type safety and code auto-complete (if you're not using TypeScript in your projects... use TypeScript).

# Getting Started
1. Clone the repository and enter into the it by running \
`git clone https://github.com/jmdatkin/express-best-practices-template.git && cd express-best-practices-template`.
4. Run `npm install`.
5. Run `npm run migrate up` to populate the database.
6. Run `npm run dev` to start the server.
7. Navigate to http://localhost:3030/users and http://localhost:3030/posts to see data.

---

💡 Found this useful? \
Follow Julian Atkin on LinkedIn <https://linkedin.com/in/jatkindev> for more web development insights, tips, and tricks. \
jatkindev@gmail.com \
<https://jatkin.dev>
