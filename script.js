function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (
    user === "j.stevens@blooket.com" &&
    pass === "Blu0k3t!Emp#0492"
  ) {
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Access Denied: Invalid credentials");
  }
}
