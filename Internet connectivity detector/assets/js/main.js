const status = document.getElementById("status");
const ip_address = document.getElementById("ip-address");
const strength = document.getElementById("strength");

const internetChecker = () => {
  status.innerText = `Checking...`;

  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((Response) => Response.json())
      .then((data) => {
        status.innerText = `Connected`;
        ip_address.innerText = data.ip;
        const networkStrength = navigator.connection;
        strength.innerText = networkStrength
          ? networkStrength.downlink + " Mbps"
          : "Unknown";
      })
      .catch(() => {
        status.innerText = `Disconnected`;
        ip_address.innerText = `-`;
        strength.innerText = `-`;
      });
  } else {
    status.innerText = `Disconnected`;
    ip_address.innerText = `-`;
    strength.innerText = `-`;
  }
};

window.addEventListener("load", internetChecker);
