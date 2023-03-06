import { type NextPage } from "next";
import Head from "next/head";
import InputField from "~/components/InputField";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Lorem ipsum dolor sit amet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <div className="flex h-full w-full items-center justify-center border border-black p-2">
          <form className="flex flex-col gap-2">
            <InputField
              type={"text"}
              name={"name"}
              text={"item name"}
              placeholder={""}
            />
            <InputField
              type={"number"}
              name={"bin"}
              text={"buy it now"}
              placeholder={""}
            />
            <InputField
              type={"number"}
              name={"lask"}
              text={"lowest ask"}
              placeholder={""}
            />
            <div className="flex w-full gap-2">
              <label className="border border-black">time</label>
              <select className="w-full border border-black p-4">
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
                <option value="96">96 hours</option>
              </select>
            </div>
            <button type="submit" className="mx-auto w-max hover:underline">
              create auction
            </button>
          </form>
        </div>
        <div className="h-full w-full border border-black p-2">2</div>
      </main>
    </>
  );
};

export default Home;
