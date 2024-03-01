import styles from "./page.module.css";
import "./styles.scss";


export default function Side() {
  return (
      <main className="chat-container">
        <section className="search-section">
          <input type="text" className="search-box" placeholder="Search here ..."/>
            {/* <div tabindex="0" role="button" className="add-button">+</div> */}
        </section>
        <section className="chats">
          <h2 className="chat-title">Chats</h2>
          <div className="chat-list">
            <div className="chat-item"></div>
            <div className="chat-item"></div>
            <div className="chat-item"></div>
            <div className="chat-item"></div>
          </div>
        </section>
        <section className="messages">
          <div className="message-info">
            <div>
              <h3 className="sender">Aldi Yusronzhar</h3>
              <p className="message">bang gua di depan keluar...</p>
              <h3 className="sender">Aldi Yusronzhar</h3>
              <p className="message">bang gua di depan keluar...</p>
              <h3 className="sender">Aldi Yusronzhar</h3>
              <p className="message">bang gua di depan keluar...</p>
              <h3 className="sender">Aldi Yusronzhar</h3>
            </div>
            <div className="time-info">
              <span className="time">12:45PM</span>
              <span className="time">12:45PM</span>
              <span className="time">12:45PM</span>
              <span className="time">12:45PM</span>
            </div>
          </div>
        </section>
      </main>
  );
}

