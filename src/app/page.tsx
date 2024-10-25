

import Link from "next/link";
import "./page.css"
export default function Home() {
  return (
    <header>
      <div className="pai" >
        <div className="filho">
          <h1>Entrar</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <Link className="link" href="/login/cadastro">usuario</Link>
        </div>
      </div>
    </header>
  );
}
