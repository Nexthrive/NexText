"use client";

import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NexText from "../../../../public/NexText.png";

import "./styles.scss";

export default function Signup() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<div className="container-center">
				<form action="">
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
							/>
						</div>
						<div className="input">
							<Input
								className="my-input"
								variant=""
								type="text"
								placeholder="Email"
							/>
						</div>
						<div className="input">
							<InputGroup size="md">
								<Input
									variant=""
									type={show ? "text" : "password"}
									placeholder="Password"
									className="my-input"
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
						<button type="submit">REGISTER</button>
					</div>
				</form>
			</div>
		</>
	);
}
