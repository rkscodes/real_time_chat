import { Store, Chat } from "./Store";

export interface Room {
    roomId: string; 
    chats: Chat[]
}

export  class InMemoryStore implements Store{
    private store : Map<string, Room>

    constructor() {
        this.store = new Map<string, Room>()
    }

    initRoom(roomId: string){
        this.store.set(roomId, {
            roomId, 
            chats: []
        })
    }

    getChats(roomId:string, limit: number, offset: number){
        const room = this.store.get(roomId);
        if(!room)
            return []
        return room.chats

    }

    addChat(room:string, limit: number, offset: number){

    }
}