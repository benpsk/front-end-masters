import { readFile } from "fs/promises";

// readFile(new URL("app.mjs", import.meta.url), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// promises catch
// try {
//   const result = await readFile(new URL("apps.mjs", import.meta.url), "utf-8");
// } catch (e) {
//   console.error(e);
// }
// console.log("hello");

process.on("uncaughtException", (e) => {
  console.log(e);
});

const result = await readFile(new URL("apps.mjs", import.meta.url), "utf-8");
console.log("hello");
