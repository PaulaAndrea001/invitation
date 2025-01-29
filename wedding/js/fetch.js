const api = `http://vale.somee.com/api`;

export async function getDataUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const number = urlParams.get("number");
  const apiUrl = api + `/Functions?number=${number}`;

  try {
    const response = await fetch(apiUrl, { method: "GET" });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return [];
  }
}

export async function confirm(payload) {
  const apiUrl = api + `/Functions/confirm`;

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
    return data;
  } catch (error) {
    throw error;
  }
}
