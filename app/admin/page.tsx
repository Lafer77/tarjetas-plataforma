import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if ((session.user as any).role !== "admin") {
    redirect("/");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Panel de Administrador</h1>
      <p>Bienvenida, {session.user?.name}.</p>
      <Link href="/admin/nuevo-diseno">Subir nuevo diseño</Link>
    </main>
  );
}