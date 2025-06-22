const backendURL = "http://localhost:5000";

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(`${backendURL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  loadUsers(); // Refresh list
}

async function loadUsers() {
  const res = await fetch(`${backendURL}/api/users`);
  const users = await res.json();

  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.email}`;
    list.appendChild(li);
  });
}

loadUsers(); // Auto-load on page open
