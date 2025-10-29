import Hello from "@/components/hello";


const Home = () => {
  console.log("what type of a component am I?");
  return (
    <main>
      <div>Home</div>
      <Hello />
    </main>
  );
};

export default Home;
