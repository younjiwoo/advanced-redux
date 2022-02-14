import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_WINE_LIST = [
	{
		id: 1,
		price: 5,
		title: 'Sauvignon Blanc',
		description:
			'Pair with pasta, minced meats, potato salads, and/or asparagus.',
	},
	{
		id: 2,
		price: 7,
		title: 'Pino Gris',
		description:
			'Pair with smoked meats, flaky white fish, cream sauces, citrus fruits.',
	},
	{
		id: 3,
		price: 11,
		title: 'Riesling',
		description: 'Pair with trout, turkey breast, semi-soft white cheeses.',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>🍷 Buy your favorite wines 🍷</h2>
			<ul>
				{DUMMY_WINE_LIST.map((wine) => (
					<ProductItem
						key={wine.id}
						id={wine.id}
						title={wine.title}
						price={wine.price}
						description={wine.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
