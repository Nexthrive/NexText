"use client";

import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import axios from "axios";
import NexText from "../../../../public/NexText.png";

import "./styles.scss";

export default function Signup() {
	const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	const Username = useRef<HTMLInputElement>(null);
	const Email = useRef<HTMLInputElement>(null);
	const Password = useRef<HTMLInputElement>(null);
	const CPassword = useRef<HTMLInputElement>(null);

	const router = useRouter();

	const signup = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			if (Password.current?.value !== CPassword.current?.value) {
				console.log("Passwords do not match");
				return;
			}

			const name = Username.current?.value ?? "";
			const email = Email.current?.value ?? "";
			const password = Password.current?.value ?? "";

			console.log(name, email, password);

			const res = await axios.post(`${apiUrl}/signup`, {
				name,
				email,
				password,
			});

			console.log(res);
			alert("Account created successfully");

			localStorage.setItem("signupEmail", email);

			router.push("/otp");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="container-center">
				<form onSubmit={signup}>
					<div className="form-header">
						<Image src={NexText} alt="" className="nextext" />
						<h1>Sign Up !</h1>
					</div>
					<div className="form-inputs">
						<div className="input">
							<Input
								className="my-input"
								variant=""
								type="text"
								placeholder="Username"
								ref={Username}
							/>
						</div>
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
						<div className="input">
							<InputGroup size="md">
								<Input
									variant=""
									type={show ? "text" : "password"}
									placeholder="Confrim Password"
									className="my-input"
									ref={CPassword}
								/>
							</InputGroup>
						</div>
					</div>
					<div className="form-btn">
						<button type="submit">REGISTER</button>
					</div>
				</form>
			</div>
		</>
	);
}
