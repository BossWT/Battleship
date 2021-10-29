import { Server } from 'socket.io';

export class Room {
	public roomID: string;
	public locked: boolean;
	public hashedRoomPass: string;
	public hostUsername: string;
	public hostSocketID: string;
	private hostIP: string;
	public guestUsername: string;
	public guestSocketID: string;
	public guestIP: string;
	public hostReady: boolean;
	public guestReady: boolean;
	public hostScore: number;
	public guestScore: number;
	public hostHitCount: number;
	public guestHitCount: number;
	public turnCount: number;
	public turn: string;
	public guestShips: string[];
	public hostShips: string[];
	public guestShot: string[];
	public hostShot: string[];
	public timer: NodeJS.Timeout;
	public spectator: string;

	constructor(
		hostUsername: string,
		hashedRoomPass: string,
		hostSocketID: string,
		hostIP: string,
		locked: boolean,
		roomIterator: number
	) {
		this.roomID = ('000000' + roomIterator).slice(-6);
		this.locked = locked;
		this.hashedRoomPass = hashedRoomPass;
		this.hostUsername = hostUsername;
		this.hostSocketID = hostSocketID;
		this.hostIP = hostIP;
		this.guestUsername = undefined;
		this.guestSocketID = undefined;
		this.guestIP = undefined;
		this.hostReady = false;
		this.guestReady = false;
		this.hostScore = 0;
		this.guestScore = 0;
		this.hostHitCount = 0;
		this.guestHitCount = 0;
		this.turnCount = 1;

		roomIterator += 1;
		if (roomIterator >= 1000000) roomIterator = 0;
	}
}

// OpenRoom Class for Open Guest
export class openRoom {
	private hostName: string;
	private roomID: string;
	constructor(hostName: string, roomID: string) {
		this.hostName = hostName;
		this.roomID = roomID;
	}
}