import { uuid } from "uuidv4";

export class Like {
	public readonly id?: string;

	public userId: string;
	public postId: string;

	constructor(props: Omit<Like, "id">, id?: string) {
		this.userId = props.userId;
		this.postId = props.postId;

		if (!id) {
			this.id = uuid();
		} else {
			this.id = id;
		}
	}
}
