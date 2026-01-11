// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Optional: Add a dynamic cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.append(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

let autoIndex = 0;
setInterval(() => {
  previews.forEach(p => p.classList.remove("active"));
  previews[autoIndex].classList.add("active");
  autoIndex = (autoIndex + 1) % previews.length;
}, 3000);