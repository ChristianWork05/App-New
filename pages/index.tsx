import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/subpages/landing"); // Cambia "/subpages/landing" por la ruta de tu página de destino
  }, [router]);

  return (
    <>
    </>
  );
}