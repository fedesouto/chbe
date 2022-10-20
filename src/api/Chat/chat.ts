import { io } from "socket.io-client";
import { baseUrl } from "../config";

const initSocket = () => {
    const socket = io(baseUrl)
    return socket;
}



export default initSocket;