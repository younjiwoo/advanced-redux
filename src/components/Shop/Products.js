import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				<ProductItem
					title="Sauvignon Blanc"
					price={5}
					description="Pair with pasta, minced meats, potato salads, and/or asparagus."
				/>
				<ProductItem
					title="Pino Gris"
					price={7}
					description="Pair with smoked meats, flaky white fish, cream sauces, citrus fruits."
				/>
				<ProductItem
					title="Riesling"
					price={10}
					description="Pair with trout, turkey breast, semi-soft white cheeses."
				/>
			</ul>
		</section>
	);
};

export default Products;
