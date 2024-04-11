const card_lists = document.getElementById("card_lists");

const projects = [
  {
    id: "1",
    title: "Internet connectivity detector",
    link: "./Internet connectivity detector/",
  },
  {
    id: "2",
    title: "Palindrome chcker",
    link: "./Palindrome checker/",
  },
];
projects.map((project) => {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `
    <h3>${project.title}</h3>
    <a href="${project.link}">Go</a>
    `;
  card_lists.appendChild(li);
});
