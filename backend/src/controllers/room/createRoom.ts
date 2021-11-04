import { Socket } from 'socket.io';
import { Room } from '../../class';

export const createRoom = (
	socket: Socket,
	username: string,
	roomIterator: number,
	address: string,
	roomList: Room[]
) => {
	console.log(
		`Room creation asked from ${username} with ${address}`
	);
	console.log('Creating room...');
	roomList.push(
		new Room(username, socket.id, address, roomIterator)
	);
	const room = roomList.find((room) => room.hostSocketID === socket.id);
	if (room) {
		console.log(room);
		console.log(room.roomID);
		socket.emit(
			'createRoomResponse',
			'Completed',
			room.roomID
		);
	}
};
