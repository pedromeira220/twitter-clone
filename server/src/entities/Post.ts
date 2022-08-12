import { uuid } from "uuidv4";

export class Post {
	public readonly id?: string;

	public name: string;
	public title: string;
	public created_at: Date;

	public text_content: string;

	public user_id: string;
	public users_who_like: string[];

	constructor(props: Omit<Post, "id">, id?: string) {
		this.name = props.name;
		this.title = props.title;
		this.created_at = props.created_at;
		this.text_content = props.text_content;
		this.user_id = props.user_id;
		this.users_who_like = props.users_who_like;

		if (!id) {
			this.id = uuid();
		} else {
			this.id = id;
		}
	}
}
