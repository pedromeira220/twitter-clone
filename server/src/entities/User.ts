import { uuid } from "uuidv4";
import dayjs from "dayjs";

export class User {
	public readonly id?: string;

	public name: string;
	public email: string;
	public profile_picture: string;
	public identifier: string;
	public created_at: Date;

	constructor(props: IUser, id?: string) {
		this.name = props.name;
		this.email = props.email;
		this.profile_picture = props.profile_picture;
		this.identifier = props.identifier;
		this.created_at = new Date();

		if (!id) {
			this.id = uuid();
		} else {
			this.id = id;
		}
	}
}

interface IUser {
	name: string;
	email: string;
	profile_picture: string;
	identifier: string;
}
