import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id:1,
    title : "Book",
    description : "Best book ever",
    price : 100,
  },
  {
    id: 2,
    title: "Book",
    description: "Best book ever",
    price: 200,
  },
  {
    id: 3,
    title: "Book",
    description: "Best book ever",
    price: 300,
  },
  {
    id: 4,
    title: "Book",
    description: "Best book ever",
    price: 400,
  },
  {
    id: 5,
    title: "Book",
    description: "Best book ever",
    price: 500,
  },
  {
    id: 6,
    title: "Book",
    description: "Best book ever",
    price: 600,
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(product=>{
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            
          )})
        }
        
        
      </ul>
    </section>
  );
};

export default Products;
