// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("text"); 
para.textContent = "Hey I’m red!";
para.style.color = "red";

container.append(para);

const heading3 = document.createElement("h3");
heading3.textContent = "I’m a blue h3!";
heading3.style.color = "blue";

container.append(heading3);

const aside = document.createElement("div");
aside.classList.add("aside-box");
aside.style.cssText = "background: pink; border: 5px solid black;";
const heading1 = document.createElement("h1");
heading1.textContent = "I’m in a div";
const p = document.createElement("p");
heading3.textContent = "ME TOO!";

aside.append(heading1);
aside.append(p);

container.append(aside);
