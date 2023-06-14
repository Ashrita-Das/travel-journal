import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data";

export default function App() {
  const cards = Data.map((item) => { 
  return (
    <Card key = {item.key}
    {...item}
    /> );
})
return (
  <div>
    <Navbar />
    <section className="cards-list">{cards}</section>
    </div>
);
}


