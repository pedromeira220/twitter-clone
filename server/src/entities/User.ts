import { uuid } from "uuidv4";

export class User {
	public readonly id?: string;

	public name: string;
	public email: string;
	public profile_picture: string;
	public identifier: string;
	public created_at: Date;
	public post_id_list: string[] = [];

	constructor(props: Omit<User, "id">, id?: string) {
		this.name = props.name;
		this.email = props.email;
		this.profile_picture = props.profile_picture;
		this.identifier = props.identifier;
		this.created_at = props.created_at;
		this.post_id_list = props.post_id_list;

		if (!id) {
			this.id = uuid();
		} else {
			this.id = id;
		}
	}
}
