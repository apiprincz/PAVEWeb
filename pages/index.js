import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import IndexLayout from "../Layouts/index";

const Home = (props) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/overview");
  }, []);

  return (
    <div>
      <Head>
        <title>PAVE Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexLayout />
      </main>
    </div>
  );
};

export default Home;
