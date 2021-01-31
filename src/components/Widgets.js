import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("A new project is complete!", 'Top news - 9099 readers')}
            {newsArticle("Coronavirus: UK updates", 'Top news - 886 readers')}
            {newsArticle("Tesla hits new highs", 'Cars & auto - 312 readers')}
            {newsArticle("GME Stock Skyrockets Amid Reddit Fiasco.", 'Finance - 240 readers')}
            {newsArticle("Will Bryson ever stop doing tutorials?!?", 'Unknown - 1 reader')}
        </div>
    )
}

export default Widgets
