import {Link} from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {
 const addtoCartHandler = ()=>{};

 return (
   <div className="home">
    <section></section>
    <h1>Latest Products
    <Link to="/search" className="findmore">More</Link>
    </h1>

    <main>
     <ProductCard 
     productId="adfafaf" 
     name="BootleNeck" 
     price={1000}
     stock={435}
     handler={addtoCartHandler}
     photo="https://imgs.search.brave.com/XNK3OdRnko1pGin5SeVKpDWoU4lPN79tztOtRKmAtUY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzgxMDU2OTQvci9p/bC83NjEwYjkvMTg1/NDEzOTYwMC9pbF82/MDB4NjAwLjE4NTQx/Mzk2MDBfa2doNS5q/cGc"
      />

    </main>
    </div>
 );
};

export default Home;
