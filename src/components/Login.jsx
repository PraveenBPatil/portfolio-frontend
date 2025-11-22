import { useState } from "react";
import { login, signup } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handle(e) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.target).entries());
    try {
      if (mode === "login") {
        await login(data.email, data.password);
      } else {
        await signup(data.name, data.email, data.password);
      }
      nav("/");
    } catch (err) {
      alert("Auth failed: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{mode === "login" ? "Login" : "Sign up"}</h2>
      <form onSubmit={handle}>
        {mode === "signup" && <input name="name" required placeholder="Name" className="w-full p-3 mb-3 border rounded" />}
        <input name="email" type="email" required placeholder="Email" className="w-full p-3 mb-3 border rounded" />
        <input name="password" type="password" required placeholder="Password" className="w-full p-3 mb-3 border rounded" />
        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded">{loading ? "Please wait" : "Submit"}</button>
          <button type="button" onClick={() => setMode(m => m === "login" ? "signup" : "login")} className="px-4 py-2 border rounded">{mode === "login" ? "Create account" : "Have an account?"}</button>
        </div>
      </form>
    </section>
  );
}
