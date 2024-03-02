"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import axios from "axios";
import NexText from "../../public/NexText.png";

import "./styles.scss";

export default function Landing() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	const Username = useRef<HTMLInputElement>(null);
	const Email = useRef<HTMLInputElement>(null);
	const Password = useRef<HTMLInputElement>(null);
	const CPassword = useRef<HTMLInputElement>(null);

	const signup = async () => {
		try {
			if (Password.current?.value !== CPassword.current?.value) {
				console.log("Passwords do not match");
				return;
			}

			const res = await axios.post("some/api", {
				username: Username?.current?.value,
				email: Email?.current?.value,
				password: Password?.current?.value,
			});

			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="container-center">
				<div className="landing-container">
					<Image src={NexText} alt="" className="nextext" />
					<div className="form-header">
						<p>start texting with ...</p>
						<h1>NEXTEXT !</h1>
					</div>

					<div className="form-btn">
						<Link href="/signup" className="link">
							<button className="btn">REGISTER</button>
						</Link>
						<Link href="/login" className="link">
							<button className="btn-login">SIGN IN</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
