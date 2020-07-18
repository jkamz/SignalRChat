"use stricrt";

//import { signalR } from "./signalr/dist/browser/signalr";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

