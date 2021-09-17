const Loader = ({ loading, error, children }) => {
	return (
		<div>
		{
			loading
			?
			<p>Loading...</p>
			:
			children
		}
		</div>
	);
}

export default Loader;
