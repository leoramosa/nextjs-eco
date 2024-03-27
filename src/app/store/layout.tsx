export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Nvegacion de las categorias</nav>
      {children}
    </main>
  );
}
