import React from "react";
import { tweetProps, userProps } from "../../@types/types";
import { Tweet } from "../Tweet";
import { Container } from "./style";

type feedTimelineProps = {
	user: userProps;
	tweets: tweetProps[];
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export function FeedTimeline({ tweets, setTweetsList }: feedTimelineProps) {
	return (
		<Container>
			{tweets.map((tweet) => {
				return (
					<>
						<Tweet
							tweets={tweets}
							setTweetsList={setTweetsList}
							tweet={tweet}
							key={tweet.data.id}
						/>
					</>
				);
			})}

			{}
		</Container>
	);
}
