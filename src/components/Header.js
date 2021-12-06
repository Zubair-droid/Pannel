// import React, {useState} from "react";
import Logo from "../images/panel-logo.png"
import Grid from "@material-ui/core/Grid";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import TextsmsIcon from '@material-ui/icons/Textsms';
import "../App.css";
export default function Header() {

  return (
    <div className="headerContainer ps-4" >
      <Grid container spacing={2} className="headGrid">
        
        <Grid item xs={6} className="logo-brand justify-content-evenly" >
          <div className = "d-flex">
            <img className = "header-logo" src={ Logo } alt="" />
            <h4 className="brandName">Pannel</h4>
          </div>
        </Grid>

        <Grid item xs={6} className="" >
        <div className = "iconsPack">
          <HomeRoundedIcon />
          <ExploreRoundedIcon />
          <FavoriteBorderRoundedIcon />
          <TextsmsIcon />
        </div>
        </Grid>
        
       
        
      </Grid>
    </div>
  );
}
