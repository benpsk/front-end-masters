// CommonJS Module
// const action = () => {
//   console.log("hello");
// };
// module.exports = { action };

// es6 module
// export const action = () => {
//   console.log("hello");
// };

import { readFile, writeFile } from "fs/promises";

let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "Learn Node.js",
  body: "This is the final HTML",
};

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}
console.log(new URL("template.html", import.meta.url));
// await writeFile(new URL("index.html", import.meta.url), template);
