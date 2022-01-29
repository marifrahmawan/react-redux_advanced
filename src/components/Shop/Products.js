import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Book',
    price: 6,
    description: 'Just a Book',
  },
  {
    id: 'p2',
    title: 'Mouse',
    price: 10,
    description: 'Just a Mouse',
  },
  {
    id: 'p3',
    title: 'Keyboard',
    price: 13,
    description: 'Just a Keayboard',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={1}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
