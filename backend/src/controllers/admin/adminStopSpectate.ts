import { Socket } from 'socket.io';
import { Room, Admin } from '../../class';
import { checkAdmin } from '../../utils';

export const adminStopSpectate = (
	socket: Socket,
	roomID: string,
	roomList: Room[],
	adminList: Admin[]
) => {
	// Check privilege
	if (checkAdmin(socket.id, adminList)) {
		// Check if the admin is already spectating any game. If yes, unsubscribe admin to the room
		const admin = adminList.find((admin) => admin.socketID === socket.id)
		if (admin) {
			if (admin.isSpectating) {
				const room = roomList.find((room) => room.roomID == roomID);
				if (room) {
					room.spectator = undefined;
					socket.emit('adminStopSpectateResponse', 'Completed');
				}
			} else socket.emit('adminStopSpectateResponse', 'Not Spectating');
		}
	} else socket.emit('adminStopSpectateResponse', 'Connection Not Verified');
	socket.emit('adminStopSpectateResponse', 'Completed');
};
