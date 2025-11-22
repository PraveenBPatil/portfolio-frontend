const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

async function request(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...opts
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.status === 204 ? null : res.json().catch(() => null);
}

export const getData = () => request("/api/data");
export const sendContact = (payload) => request("/api/contact", { method: "POST", body: JSON.stringify(payload) });
export const signup = (name, email, password) => request("/api/auth/signup", { method: "POST", body: JSON.stringify({ name, email, password }) });
export const login = (email, password) => request("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
