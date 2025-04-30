function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const loadingDiv = document.getElementById("loading");
  const dashboardDiv = document.getElementById("dashboard");
  const loginSound = document.getElementById("login-sound");

  if (
    user === "j.stevens@blooket.com" &&
    pass === "Blu0k3t!Emp#0492"
  ) {
    loadingDiv.style.display = "block";

    setTimeout(() => {
      loadingDiv.style.display = "none";
      dashboardDiv.style.display = "block";
      loginSound.play();
    }, 3000); 
  } else {
    alert("Access Denied: Invalid credentials");
  }
}
