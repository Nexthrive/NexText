"use client";

import "./styles.scss";
import { useState, useEffect } from "react";
import Profil from "../../../../public/profil.jpg";
import Image from "next/image";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import * as jwt from "jsonwebtoken";

interface Friend {
	id: string;
	name: string;
	// Add other friend properties as needed
}

interface Message {
	text: string;
	sender: string;
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
	}, []); // Only run once to get initial friend list

	useEffect(() => {
		const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

		if (userID && selectedFriendId) {
			const chatID = generateChatID(userID, selectedFriendId);
			const socketInstance = new WebSocket(`${wsUrl}/${chatID}`);

			// Include UserID and FriendID in WebSocket message payload
			socketInstance.onopen = () => {
				const payload = {
					type: "init",
					userID: userID,
					friendID: selectedFriendId,
				};

				socketInstance.send(JSON.stringify(payload));

				console.log("WebSocket connection opened with payload:", payload);
			};
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
		if (socket) {
			const message = {
				text: messageInput,
				receiver_id: selectedFriendId!,
				timestamp: new Date(),
			};
			const jsonMessage = JSON.stringify(message);

			socket.send(jsonMessage);

			setMessages((prevMessages) => [
				...prevMessages,
				message as unknown as Message,
			]);

			setMessageInput("");
		}
	};

	const generateChatID = (userID: string, friendID: string) => {
		const payload = {
			UserID: userID,
			FriendID: friendID,
		};

		const token = jwt.sign(payload, "hehe", {
			expiresIn: "1h",
		});

		return token;
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
				<div className="overlay"></div>
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
						<div className="message-receive">
							{messages.map((message, index) => (
								<div
									key={index}
									className={
										message.sender === userID ? "my-message" : "other-message"
									}
								>
									<p className="message">{message.text}</p>
									<span className="time">
										{/* Format and display timestamp as needed */}
									</span>
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
