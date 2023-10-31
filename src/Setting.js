function Setting({ userList, setUserList }) {
	const addUser = () => {
		const newUser = {
			name: "",
			userColor: "white",
			currentScore: 5,
			targetScore: 10,
			cushion: 1,
		};

		const newUserList = [...userList, newUser];

		setUserList(newUserList);
	};

	const removeUser = (index) => {
		const newUserList = [...userList];
		newUserList.splice(index, 1);

		setUserList(newUserList);
	};

	const onChangeName = (event, index) => {
		const name = event.target.value;

		const defaultUser = defaultUserList.find(
			(defaultUser) => defaultUser.name === name
		);

		const newUser = {
			...defaultUser,
			name: event.target.value,
		};

		const newUserList = [...userList];
		newUserList.splice(index, 1, newUser);

		setUserList(newUserList);
	};

	const onBlurUserProp = (event, index) => {
		const newUser = {
			...userList[index],
			[event.target.name]: event.target.value,
		};

		const newUserList = [...userList];
		newUserList.splice(index, 1, newUser);

		setUserList(newUserList);
	};

	return (
		<div>
			<table>
				{userList.map((user, index) => {
					const { name, targetScore, cushion } = user;
					return (
						<tr key={name}>
							<td>
								<select
									value={name}
									onChange={(event) => onChangeName(event, index)}
								>
									{defaultUserList.map((defaultUser) => {
										const { name } = defaultUser;
										return (
											<option value={name} key={name}>
												{name}
											</option>
										);
									})}
								</select>
							</td>
							<td>
								<input
									name="targetScore"
									defaultValue={targetScore}
									onBlur={(event) => onBlurUserProp(event, index)}
								/>
							</td>
							<td>
								<input
									name="cushion"
									defaultValue={cushion}
									onBlur={(event) => onBlurUserProp(event, index)}
								/>
							</td>
							<td>
								<button onClick={() => removeUser(index)}>-</button>
							</td>
						</tr>
					);
				})}
				<tr>
					<td>
						<button onClick={() => addUser()}>+</button>
					</td>
					<td>
						<button>게임 시작</button>
					</td>
				</tr>
			</table>
		</div>
	);
}

const defaultUserList = [
	{
		name: "Eric",
		currentScore: 0,
		targetScore: 8,
		cushion: 1,
	},
	{
		name: "Joel",
		currentScore: 0,
		targetScore: 20,
		cushion: 1,
	},
	{
		name: "Leo",
		currentScore: 0,
		targetScore: 12,
		cushion: 0,
	},
	{
		name: "Michael",
		currentScore: 0,
		targetScore: 20,
		cushion: 1,
	},
];

export default Setting;
