import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });
    const { _id } = response.data;
    localStorage.setItem("user_id", _id);
    history.push("/dashboard");
    console.log(_id);
  }
  return (
    <>
      <p>
        Ofrezca <strong>spots</strong> para los programadores y encuentre{" "}
        <strong>talentos</strong> para tu empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Su mejor email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
