"use client";

import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import axios from "axios";
import NexText from "../../../../public/NexText.png";

import "./styles.scss";

export default function Login() {
	const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	const Email = useRef<HTMLInputElement>(null);
	const Password = useRef<HTMLInputElement>(null);

	const login = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const email = Email.current?.value ?? "";
			const password = Password.current?.value ?? "";

			const res = await axios.post(`${apiUrl}/login`, {
				email: email,
				passphrase: password,
			});

			const jwt = res.data.token;

			localStorage.setItem("jwt", jwt);

			alert("Logged in successfully");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="container-center">
				<form onSubmit={login}>
					<div className="form-header">
						<Image src={NexText} alt="" className="nextext" />
						<h1>Log In !</h1>
					</div>
					<div className="form-inputs">
						<div className="input">
							<Input
								className="my-input"
								variant=""
								type="text"
								placeholder="Email"
								ref={Email}
							/>
						</div>
						<div className="input">
							<InputGroup size="md">
								<Input
									variant=""
									type={show ? "text" : "password"}
									placeholder="Password"
									className="my-input"
									ref={Password}
								/>
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm" onClick={handleClick}>
										{show ? "Hide" : "Show"}
									</Button>
								</InputRightElement>
							</InputGroup>
						</div>
					</div>
					<div className="form-btn">
						<button type="submit">SIGN IN</button>
					</div>
				</form>
			</div>
		</>
	);
}
