import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benifits/>
      </div>
      <ButtonGradient />
    </div>
  );
}

export default App;
