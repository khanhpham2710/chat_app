import SockJS from "sockjs-client";
import ChatRoom from "./component/ChatRoom";
import { over } from "stompjs";

function App() {
  const socket = new SockJS("http://localhost:8080/ws");
  const stompClient = over(socket);

  stompClient.connect(
    {},
    (frame) => {
      console.log("Connected: " + frame);
    },
    (error) => {
      console.error("Connection error:", error);
    }
  );

  return <ChatRoom />;
}

export default App;
