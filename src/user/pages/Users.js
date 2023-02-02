import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	// Dummy Data
	const USERS = [
		{
			id: "u1",
			name: "Jim Mendoza",
			image:
				"https://images.pexels.com/photos/5418318/pexels-photo-5418318.jpeg",
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
