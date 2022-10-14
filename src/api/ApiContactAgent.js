import axios from "axios";

export async function ContactAgent(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/property/contact/${id}`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetContacts() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/agent/contacts`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
