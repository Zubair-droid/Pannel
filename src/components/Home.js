import React from 'react'
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import plane from '../images/plane.jpg' 
export default function Home() {
    return (
        <div className = "bg">
         <div className = "homeContainer">
           <Grid container spacing={2} >
                <Grid item xs={0} sm={4} md={3} className="LeftGrid">
                    <div >
                        {/* User Info here */}
                         <div className = "userCard">
                            <AccountCircleIcon fontSize="large" />
                            <p>Name</p>
                            <p>About</p>
                            <p>What you're looking for</p>
                            <p>Interests</p>
                            <p>Saved items</p>
                            <p>Groups</p>
                         </div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={5} md={6} >
                    <div className="postCard">
                        {/* <p>Posts</p> */}
                      <div className="postSpace">
                        <div className="heroRow">
                        <AccountCircleIcon fontSize="large" />
                        <input type="text" className = "heroTextBox" placeholder = "Write your thoughts here!" ></input>  
                        </div>

                        <div className="actions">
                          <AddPhotoAlternateIcon />
                          <VideoCallIcon />
                          <NoteAddIcon />
                          <InsertLinkIcon />
                        </div>
                      </div>
                    </div>
                </Grid>

                <Grid item xs={0} sm={3} md={3}  >
                    <div className = "newsCard">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae rerum maiores necessitatibus nobis dolor perferendis quibusdam velit laudantium reiciendis animi dignissimos commodi quos, libero accusantium odit deserunt? Veniam, minima!</p>
                    </div>

                    <div className = "newsCard">
                        <img src={plane} alt="planeImage" className="plane-img" />
                    </div>
                   
                </Grid>
           </Grid> 
        </div>
      </div>
    )
}
