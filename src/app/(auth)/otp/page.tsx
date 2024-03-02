"use client";

import Image from "next/image";
import React, { use, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import NexText from "../../../../public/NexText.png";
import OtpInput from "react-otp-input";
import { parse, serialize } from "cookie";
import "./styles.scss";

export default function Otp() {
	const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const [otp, setOtp] = useState("");
	const Email = localStorage.getItem("signupEmail");

	const router = useRouter();

	const verify = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const res = await axios.post(`${apiUrl}/verify-otp`, {
				email: Email,
				otp: +otp,
			});

			const jwt = res.data.token;

			// Set JWT in a secure, HTTP-only cookie
			document.cookie = serialize("jwt", jwt, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production", // Set to true in production
				sameSite: "strict",
				maxAge: 3600, // Token expiration time in seconds
				path: "/", // Adjust the path as needed
			});

			alert("Account verified successfully");
			localStorage.removeItem("signupEmail");
			router.push("/chat");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className="container-center">
				<form onSubmit={verify}>
					<div className="form-header">
						<Image src={NexText} alt="" className="nextext" />
						<h1>Verify OTP !</h1>
						<p>
							We sent a verification code to your email <br />
							<span>{Email}</span>
							<br />
						</p>
					</div>
					<div className="form-inputs">
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							renderInput={(props) => <input {...props} />}
							inputType="number"
							containerStyle={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							inputStyle={{
								outline: "2px solid #000",
								width: "20%",
								height: "50px",
								margin: "0px 10px",
								fontFamily: "Kanit",
								fontWeight: "700",
								fontSize: "20px",
								color: "#000",
								border: "none",
								padding: "0px 10px",
								borderRadius: "7px",
							}}
						/>
					</div>
					<div className="form-btn">
						<button type="submit">VERIFY</button>
					</div>
				</form>
			</div>
		</>
	);
}
