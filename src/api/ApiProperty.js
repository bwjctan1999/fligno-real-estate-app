import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/property";

export async function GetProperty(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function SearchProperty(search) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}`, {
      params: {
        search: search,
      },
    });
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function PostProperty(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(`${base_url}-create`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function DeleteProperty(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.delete(`${id}`);
  } catch (e) {
    resolved.error = e;
  }
}

export async function UpdateProperty(id, data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.put(`${base_url}/${id}`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
