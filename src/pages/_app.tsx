import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("ROUTE CHANGE START");
    });
    router.events.on("routeChangeComplete", () => {
      console.log("ROUTE CHANGE END");
    });
  }, [router.events]);
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
