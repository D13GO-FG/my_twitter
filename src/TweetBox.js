import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet= (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Juana Mengana",
            username: "JMperson",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://wikimon.net/images/thumb/2/2b/Tailmon.png/200px-Tailmon.png"
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9P2AK83U2llR22ZYGLpdbUE7IAGhEBiuWh7uHF=s83-c-mo"/>
                    <input
                    onChange={(e)=>setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    placeholder="What's happening" 
                    type="text"/>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
