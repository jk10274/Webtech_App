// Author: Jona Kaufmann

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/services/AuthService";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await signIn(username, password);
    console.log("Response from signIn:", data);
    if (data.token && typeof data.token === "string") {
      // Test ob String muss sein, da sonst auch null true ist
      console.log("Logged in successfully: " + data.token);
      localStorage.setItem("token", data.token);
      router.push("/journeys");
    } else {
      alert(data.error || "Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login to your account to manage your journeys.</p>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
