import React from 'react';
import Styles from './Details.module.css'
import workspace from '../Assets/workspace.jpg'
import snapchat from '../Assets/snapchat.svg'

function Details() {
    return (
        <div className={Styles.fluid}>
            <div className={Styles.container}>
                <div className={Styles.imgContainer} >
                    <img className={Styles.workspace} src={workspace} alt='workspace' />
                    <div className={Styles.back} >
                    <i className={`${Styles.arrow} fa fa-long-arrow-left`} ></i>
                    </div>
                    <div className={Styles.logo}>
                    <img  src={snapchat} alt='snapchat' className={Styles.snapchat}/>
                    </div>
                </div>

                <div className={Styles.contentsContainer}>
                    <h1 className={Styles.mainTitle}>Snapchat</h1>
                    <p className={Styles.address}>SP Infocity Street, Chennai</p>
                    <div className={Styles.contentBox}>
                        <div className={Styles.box}>
                            <h3 className={Styles.role}>Role</h3>
                            <h5 className={Styles.roleTitle}>Frontend Developer</h5>
                        </div>
                        <div className={Styles.box}>
                            <h3 className={Styles.role}>Level</h3>
                            <h5 className={Styles.roleTitle}>Midweight</h5>
                        </div>
                        <div className={Styles.box}>
                            <h3 className={Styles.role}>Contract</h3>
                            <h5 className={Styles.roleTitle}>FullTime Employement</h5>
                        </div>
                    </div>

                    <div className={Styles.overviewContainer}>
                    <h1 className={Styles.heading}>
                        Overview
                    </h1>
                    <div className={Styles.textContent}>
                        <p className={Styles.paragraphText}>
                        Snapchat is an American multimedia messaging app developed by Snap Inc., originally Snapchat Inc. 
                        One of the principal features of Snapchat is that pictures and messages are usually only available 
                        for a short time before they become inaccessible to their recipients.
                        </p>
                    </div>
                </div>
                
                <div className={Styles.descriptionContainer}>
                    <h1 className={Styles.descriptionTitle}>Job Description</h1>
                    <ul className={Styles.descriptionLists}>
                        <li className={Styles.descriptionListItem}>
                        Minimum 2+ years experience in Front End Development
                        </li>
                        <li className={Styles.descriptionListItem}>
                        Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen
                        </li>
                        <li className={Styles.descriptionListItem}>
                        Familiarity with cloud messaging APIs and push notifications
                        </li>
                        <li className={Styles.descriptionListItem}>
                        Sound knowledge on RESTful and GraphQL APIs
                        </li>
                        <li className={Styles.descriptionListItem}>
                        Proficient in Git and familiarity with continuous integration
                        </li>
                    </ul>
                </div>

                
                
                <div className={Styles.languagesContainer}>
                    <h1 className={Styles.languageHeading}>Programming Languages</h1>
                    <div className={Styles.languageBox}>

                        <button className={Styles.language}>HTML</button>
                        <button className={Styles.language}>CSS</button>
                        <button className={Styles.language}>Javascript</button>
                        <button className={Styles.language}>JQuery</button>
                        <button className={Styles.language}>Python</button>
                        <button className={Styles.language}>Go</button>
                        <button className={Styles.language}>Ruby</button>
                  
                    </div>
                </div>

                <div className={Styles.toolsContainer}>
                    <h1 className={Styles.toolsHeading}>Tools</h1>
                    <div className={Styles.toolBox}>
                    <button className={Styles.tool}>React</button>
                    <button className={Styles.tool}>Vue.js</button>
                    <button className={Styles.tool}>Bootstrap</button>
                    <button className={Styles.tool}>TailwindCSS</button>
                    <button className={Styles.tool}>Codepen</button>
                    <button className={Styles.tool}>VS code</button>
                    <button className={Styles.tool}>Version control</button>
                    </div>
                </div>
                

            <button className={Styles.applyBtn}>
                APPLY NOW
            </button>



                </div>

               
               
            </div>
        </div>
    );
}

export default Details;