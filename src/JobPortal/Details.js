import React from 'react';
import Styles from './Details.module.css'
import workspace from '../Assets/workspace2.jpg'
import snapchat from '../Assets/snap-final.png'

function Details() {

    const languages = ['HTML' , 'CSS' , 'Javascript' , 'JQuery' ,'Python' ,'Go' , 'Ruby'] ;
    const tools = ['React' , 'vue.js','Bootstrap','Codepen','TailwindCss','Ruby','Go'];
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
                   
                    <div className={Styles.titleContainer}>
                         <h1 className={Styles.mainTitle}>Snapchat</h1>
                        <p className={Styles.address}>SP Infocity Street, Chennai</p>
                    </div>

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
                                {
                                    languages.map((el) => {
                                        return (<button className={Styles.language}>{el}</button>)
                                    })
                                }

                        
                            </div>
                     </div>

                    <div className={Styles.toolsContainer}>
                        <h1 className={Styles.toolsHeading}>Tools</h1>
                        <div className={Styles.toolBox}>
                            {
                                tools.map(el => {
                                    return <button className={Styles.tool}>{el}</button>   
                                    
                                })
                            }
                                  
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