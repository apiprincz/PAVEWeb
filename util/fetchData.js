const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getData = async (url) => {
  const res = await fetch(`${BASE_URL}/api/${url}`, {
    method: "GET",
    origin: "*",
  });

  const data = await res.json();

  return data;
};
export const postData = async (url, post) => {
  const res = await fetch(`${BASE_URL}/api/${url}`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};
