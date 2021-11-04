import { Socket } from 'socket.io';
import { Room, Admin } from '../../class';
import { checkAdmin } from '../../utils';

export const adminSpectate = (
	socket: Socket,
	roomID: string,
	roomList: Room[],
	adminList: Admin[]
) => {
	// Check privilege
	if (checkAdmin(socket.id, adminList)) {
		const admin = adminList.find((admin) => admin.socketID === socket.id);
		if (admin) {
			// Check if the admin is already spectating any game. If not, subscribe admin to the room
			if (admin.isSpectating)
				socket.emit('adminSpectateResponse', 'Already Spectating');
			else {
				const room = roomList.find((room) => room.roomID == roomID);
				if (room) {
					room.spectator = socket.id;
					admin.isSpectating = true;
				}
			}
		}
	} else socket.emit('adminSpectateResponse', 'Connection Not Verified');
};
