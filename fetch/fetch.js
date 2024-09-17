const data = Promise.allSettled(
  [...Array(10)].map((_, i) =>
    fetch(`http://65.109.8.209:3001/${i + 1}`).then((res) => res.json())
  )
)
  .then((results) =>
    results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value)
  )
  .then((data) =>
    data.flat().sort((a, b) => {
      const firstAddress = a.ip_address.split(".").map((x) => parseInt(x));
      const secondAddress = b.ip_address.split(".").map((x) => parseInt(x));
      const result = firstAddress.reduce(
        (acc, cur, i) => (acc === 0 ? cur - secondAddress[i] : acc),
        0
      );
      return result;
    })
  )

  .then((data) => {
    const tbody = document.querySelector("#fill");
    data.forEach((element) => {
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      id.textContent = element.id;
      const first_name = document.createElement("td");
      first_name.textContent = element.first_name;
      const last_name = document.createElement("td");
      last_name.textContent = element.last_name;
      const email = document.createElement("td");
      email.textContent = element.email;
      const gender = document.createElement("td");
      gender.textContent = element.gender;
      const ip_address = document.createElement("td");
      ip_address.textContent = element.ip_address;
      tr.appendChild(id);
      tr.appendChild(first_name);
      tr.appendChild(last_name);
      tr.appendChild(email);
      tr.appendChild(gender);
      tr.appendChild(ip_address);
      tbody.appendChild(tr);
    });
  });
