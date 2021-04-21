const RenderComment = () => {
	const renderCommentItem = ({ item }) => {
		return (
			<View style={{ margin: 10 }}>
				<Text style={{ fontSize: 14 }}>{item.text}</Text>
				<Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
				<Text
					style={{
						fontSize: 12,
					}}>{`-- ${item.author}, ${item.date}`}</Text>
			</View>
		);
	};

	return (
		<Card title='Comments'>
			<FlatList
				data={comments}
				renderItem={renderCommentItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</Card>
	);
};

export default RenderComment;
