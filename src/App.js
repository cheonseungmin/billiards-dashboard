import { useState } from "react";
import Setting from "./Setting";

function App() {
	const [userList, setUserList] = useState([]);

	return (
		<div>
			<Setting userList={userList} setUserList={setUserList} />
		</div>
	);
}

export default App;
