import './App.css';
import Navbar from './components/Navbar';
import NewCard from './components/NewCard';
import Card from "./components/Card"
import Solutions from './components/Solutions';
import Register from './components/Register';
import WhyMakhdoom from './components/WhyMakhdoom';
import UseCases from './components/Usecases';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import NewsLetterr from './components/NewsLetter';
function App() {
  return (
   <div className='App'>

    <Navbar />
    <NewCard />
    <Card />
    <Solutions />
    <Register />
    <WhyMakhdoom />
    <UseCases />
    <JoinUs />
    <Footer heading={"Head Office"} item1={"+966 11 812 0200"} item2={"info@makhdoom.sa"} item3={"7884 Khaleej District_ Riyadh li.O Box 12333"} item4={""} item5={""} item6={""}/>
    <Footer heading={"Support"} item1={"FAQ"} item2={"Contact Us"} item3={"Open Support Ticket"} item4={"Queries"} item5={""} item6={""}/>
    <Footer heading={"Makhdoom"} item1={"E-Logistics Platform"} item2={"Makhdoom Storage"} item3={"Makhdoom Express"} item4={"Makhdoom Freight"} item5={"Platfrom Login"} item6={"Request a demo"}/>
    <NewsLetterr />
   </div>
  );
}

export default App;
