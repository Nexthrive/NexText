import styles from "./page.module.css";
import "./styles.scss";


export default function Chat() {
  return (
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
          <p className="message-me">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className="message-me">owalah</p>
          <p className="message-me">kirain beneran aa</p>
          <p className="message-me">ok</p>
          <p className="message-me">menyalah</p>
          <p className="message-me">sabar bang aku mandi duluh</p>
          <p className="message-me">lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <span className="time">12:47PM</span>
        </div>

        </section>
        <section className="message-input-section">
          <input type="text" className="message-input" placeholder="Write Your Message....." aria-label="Write Your Message">
          </input>
            <button className="send-button">
              Send
            </button>
        </section>
      </main>
  );
}

