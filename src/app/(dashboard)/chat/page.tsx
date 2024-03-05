"use client";

import "./styles.scss";
import { useState, useEffect } from "react";
import Profil from "../../../../public/profil.jpg";
import Image from "next/image";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface Friend {
	id: string;
	name: string;
}

interface Message {
	text: string;
	receiverID: string;
	timestamp: Date;
}

interface jwtPayload {
	email: string;
	exp: number;
	id: string;
}

interface ChatProps {}

export default function Chat({}: ChatProps) {
	const [friendsData, setFriendsData] = useState<Friend[]>([]);
	const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);
	const [messages, setMessages] = useState<Message[]>([]);
	const [messageInput, setMessageInput] = useState<string>("");
	const [socket, setSocket] = useState<WebSocket | null>(null);
	const [userID, setUserID] = useState<string | null>(null);

	useEffect(() => {
		const jwt = Cookies.get("jwt");

		if (jwt) {
			const decoded = jwtDecode<jwtPayload>(jwt);
			setUserID(decoded.id);
			getFriends();
		}
	}, []);

	useEffect(() => {
		const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

		if (userID && selectedFriendId) {
			setMessages([]);
			const chatID = generateChatID(userID, selectedFriendId);

			const socketInstance = new WebSocket(
				`${wsUrl}/${chatID}?UserID=${userID}&FriendID=${selectedFriendId}`
			);

			socketInstance.addEventListener("open", () => {
				const payload = {
					type: "init",
					userID: userID,
					friendID: selectedFriendId,
				};

				socketInstance.send(JSON.stringify(payload));
			});

			socketInstance.addEventListener("message", (event) => {
				const wsMessage = JSON.parse(event.data);

				if (wsMessage.text.trim() !== "") {
					const newMessage: Message = {
						text: wsMessage.text,
						receiverID: wsMessage.receiver, // Use the receiverID from WebSocket message
						timestamp: new Date(wsMessage.timestamp),
					};

					setMessages((prevMessages) => [...prevMessages, newMessage]);
				}
			});

			setSocket(socketInstance);
		}
	}, [selectedFriendId, userID]);

	const getFriends = async () => {
		try {
			const token = Cookies.get("jwt");
			const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

			const res = await axios.get<{ friends: Friend[] }>(
				`${apiUrl}/friends/list`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			setFriendsData(res.data.friends);
		} catch (err) {
			console.log(err);
		}
	};

	const handleFriendClick = (friendId: string) => {
		setSelectedFriendId(friendId);
	};

	const sendTextMessage = () => {
		if (socket && selectedFriendId) {
			const message = {
				text: messageInput,
				receiver_id: selectedFriendId as string, // Set the actual recipient's ID
			};

			socket.send(JSON.stringify(message));

			const newMessage: Message = {
				text: messageInput,
				receiverID: selectedFriendId!, // Set the actual sender's ID and assert it is not null
				timestamp: new Date(),
			};

			setMessages((prevMessages) => [...prevMessages, newMessage]);

			setMessageInput("");
		}
	};

	const generateChatID = (userID: string, friendID: string) => {
		const sortedIDs =
			userID.localeCompare(friendID) < 0
				? [userID, friendID]
				: [friendID, userID];

		return sortedIDs.join("_");
	};

	const formatTimestamp = (timestamp: Date) => {
		const hours = timestamp.getHours().toString().padStart(2, "0");
		const minutes = timestamp.getMinutes().toString().padStart(2, "0");
		const seconds = timestamp.getSeconds().toString().padStart(2, "0");

		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<div className="wrapper">
			<div className="side-nav">
				<div className="nav-container">
					<div className="search-section">
						<input
							type="text"
							className="search-box"
							placeholder="Search here..."
						/>
						<button className="add-friend">+</button>
					</div>

					<div className="friends-section">
						<div className="friends-container">
							{((friendsData as any[]) || []).map((friend) => (
								<div
									key={friend.id}
									className="card-friend"
									onClick={() => handleFriendClick(friend.id)}
								>
									<Image src={Profil} alt="" className="profil" />
									<div className="friend-info">
										<div className="name">
											<h1 className="nama">{friend.name}</h1>
											<p className="time">12:00PM</p>
										</div>
										<div className="chat-send">
											<div className="chat">Lorem ipsum dolor sit amet...</div>
											<div className="notif">2</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="chat-container">
				<main className="container">
					<section className="profile-section">
						<div className="status-indicator"></div>
						<div className="user-info">
							<span className="user-name">Aldi Yusronzhar</span>
						</div>
						<div className="status-container">
							<div className="status-dot">○</div>
							<div className="status-text">Online</div>
						</div>
					</section>
					<div className="separator"></div>
					<section className="message-section">
						<div className="messages">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`${
										message.receiverID === userID
											? "other-message"
											: "my-message"
									}`}
								>
									{message.text.trim() !== "" && (
										<>
											<p className="message">{message.text}</p>
											<span
												className={`time ${
													message.receiverID === userID
														? "my-message-time"
														: "other-message-time"
												}`}
											>
												{formatTimestamp(message.timestamp)}
											</span>
										</>
									)}
								</div>
							))}
						</div>
					</section>

					<section className="message-input-section">
						<input
							type="text"
							className="message-input"
							placeholder="Write Your Message....."
							aria-label="Write Your Message"
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
						></input>
						<button className="send-button" onClick={sendTextMessage}>
							Send
						</button>
					</section>
				</main>
			</div>
		</div>
	);
}
