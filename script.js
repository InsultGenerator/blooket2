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
      response = `Available commands:
- give-coins [user] [amount]
- help
- logout`;
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
