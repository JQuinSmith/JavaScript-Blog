const sectionEl = document.querySelectorAll(".article__header");
console.log(sectionEl);

document.querySelector(".article__header").textContent = "Welcome to Quin's Blog"
console.log(sectionEl);

const dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove("dashed");

const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");

/* 
- Use JavaScript to obtain a reference to the first section with the class of article_header 
and change its text with the textContent property to "Welcome to the {insert your name here} blog"

- Use JavaScript to obtain a reference to all article__header elements 
and change their classList property value to article__header important.
*/