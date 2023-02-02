import React from "react";

import UserItem from "./UserItem";

import "./UsersList.css";

const UsersList = (props) => {
	if (props.items.length === 0) {
		// If there are no registered users.
		return (
			<div className="center">
				<h2>No Users Found.</h2>
			</div>
		);
	}

	// If there are users registered. It should have an ID, Name, Image, and the number of places posted.
	return (
		<ul className="users-list">
			{props.items.map((user) => {
				return (
					<UserItem
						key={user.id}
						id={user.id}
						image={user.image}
						name={user.name}
						placeCount={user.places}
					/>
				);
			})}
		</ul>
	);
};

export default UsersList;
