import useLoading from "../components/loading/index";

// @ts-ignore
const Card = ({ loading }) => {
	const ref = useLoading(loading, "loadingClass");

	return (
		<div className="card" ref={ref}>
			<h1 className="card-title" data-loading>
				This is a title
			</h1>
			<p className="card-description" data-loading>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				imperdiet orci eget nunc mattis faucibus. In a purus turpis. Cras
				condimentum diam nec consequat cursus.
			</p>

			<div className="card-price" data-loading>
				1000$
			</div>
		</div>
	);
};

export default function CardList() {
	return <Card loading={false} />;
}
