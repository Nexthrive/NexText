"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import axios from "axios";
import NexText from "../../../../public/NexText.png";

import OtpInput from "react-otp-input";

import "./styles.scss";

export default function Otp() {
	const [otp, setOtp] = useState("");

	const signup = async () => {
		console.log(setOtp);
		try {
			const res = await axios.post("some/api", {});

			console.log(res);
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
						<h1>Verify OTP !</h1>
						<p>
							We sent a verification code to your email <br />
							<span>nur***@***.*om</span>
						</p>
					</div>
					<div className="form-inputs">
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							renderSeparator={<span>-</span>}
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