// import styles from "./page.module.css";
import "./styles.scss";
import Profil from "../../../../public/profil.jpg";
import Image from "next/image";

export default function Chat() {
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
							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>

							<div className="card-friend">
								<Image src={Profil} alt="" className="profil" />
								<div className="friend-info">
									<div className="name">
										<h1 className="nama">Aldi Yusron</h1>
										<p className="time">12:00PM</p>
									</div>
									<div className="chat-send">
										<div className="chat">Lorem ipsum dolor sit amet...</div>
										<div className="notif">2</div>
									</div>
								</div>
							</div>
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
						<img src="../../../../public/bg-patern.png" alt="" className="bg" />
						<div className="message-receive">
							<p className="message">Bang guah dah di depan</p>
							<p className="message">ok sip</p>
							<p className="message">Keluar gc anjingg lamaa banget asuuuu</p>
							<p className="message">Bang guah dah di depan</p>
							<p className="message">owalah oke bangh</p>
							<p className="message">Bang guah dah di depan</p>
							<p className="message">ok sip</p>
							<p className="message">Keluar gc anjingg lamaa banget asuuuu</p>
							<p className="message">Bang guah dah di depan</p>
							<p className="message">owalah oke bangh</p>
							<span className="time">12:45PM</span>
						</div>

						<div className="my-message">
							<p className="message-me">owalah</p>
							<p className="message-me">kirain beneran aa</p>
							<p className="message-me">ok</p>
							<p className="message-me">menyalah</p>
							<p className="message-me">sabar bang aku mandi duluh</p>
							<p className="message-me">
								lorem ipsum dolor sit amet, consectetur adipisicing elit
							</p>
							<p className="message-me">owalah</p>
							<p className="message-me">kirain beneran aa</p>
							<p className="message-me">ok</p>
							<p className="message-me">menyalah</p>
							<p className="message-me">sabar bang aku mandi duluh</p>
							<p className="message-me">
								lorem ipsum dolor sit amet, consectetur adipisicing elit
							</p>
							<span className="time">12:47PM</span>
						</div>
					</section>
					<section className="message-input-section">
						<input
							type="text"
							className="message-input"
							placeholder="Write Your Message....."
							aria-label="Write Your Message"
						></input>
						<button className="send-button">Send</button>
					</section>
				</main>
			</div>
		</div>
	);
}
