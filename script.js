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
    }, 3000); // 3-second fake loading
  } else {
    alert("Access Denied: Invalid credentials");
  }
}

function runCommand(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("cmd");
    const output = document.getElementById("command-output");
    const command = input.value.trim();
    let response = "";

    if (command.startsWith("give-coins")) {
      const parts = command.split(" ");
      if (parts.length === 3) {
        const user = parts[1];
        const amount = parts[2];
        response = `✅ Granted ${amount} coins to user "${user}"`;
      } else {
        response = "❌ Usage: give-coins [username] [amount]";
      }
    } else if (command === "help") {
      response = `Available commands:\n- give-coins [user] [amount]\n- help\n- logout`;
    } else if (command === "logout") {
      location.reload();
    } else {
      response = `❓ Unknown command: "${command}" — type "help"`;
    }

    const para = document.createElement("p");
    para.textContent = `> ${command}\n${response}`;
    output.appendChild(para);
    input.value = "";
  }
}
