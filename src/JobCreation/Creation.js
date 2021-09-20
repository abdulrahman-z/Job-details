import React from 'react';
import CustomInput from '../components/CustomInput';
import Chips from '../JobLang/Chips';
import Styles from './Creation.module.css'

function Creation() {
    return (
        <div>
            <div className={Styles.fluid}>
                <div className={Styles.mainContainer}>
                    <div className={Styles.pageHeadingContainer}>
                        <div className={Styles.iconBox}>
                        <i className={`${Styles.backArrow} fa fa-long-arrow-left`}></i>
                        </div>
                        
                        <h1 className={Styles.mainHeading}>Job Creation</h1>
                    </div>
                    <div className={Styles.imageFileContainer}>
                        <label htmlFor='file' className={Styles.fileLabel}>
                        <i className={ `${Styles.plus} fa fa-plus`}></i>
                        </label>
                        <input type='file' id='file' className={Styles.fileInput} />
                    </div>

                    <div className={Styles.companyContainer}>
                        <h1 className={Styles.companyTitle}>Company Info</h1>
                        <div className={Styles.companyForm}>
                            {/* <input className={Styles.companyName} placeholder="Company Name"/>
                            <input className={Styles.address} placeholder="Address"/>
                            <input className={Styles.overview} placeholder="overview"/>
                             */}
                             <CustomInput placeholder="Company name" />
                             <CustomInput placeholder="Address" />
                             <CustomInput placeholder="Overview" />

                        </div>
                    </div>

                    <div className={Styles.jobSection}>
                        <h1 className={Styles.title}>Job Info</h1>
                   
                        <div className={Styles.contentHolder}>
                            <div className={Styles.iconSection}>
                                <div className={Styles.font}>
                                <i className={`fa fa-bold `}></i>
                                <i className={`fa fa-italic `}></i>
                                <i className={`fa fa-underline `}></i>
                                </div>
                                <div className={Styles.alignment}>
                                <i className={`fa fa-align-left`}></i>
                                <i className={`fa fa-align-center`}></i>
                                <i className={`fa fa-align-right`}></i>
                                <i className={`fa fa-align-justify`}></i>
                                <i className={`fa fa-link`}></i>
                                <i className={`fa fa-list-ul`}></i>
                                </div>
                            </div>

                            <textarea className={Styles.text}></textarea>

                            </div>
               
                       
                    </div>

                    <div className={Styles.langSection}>
                             <Chips titlename='Languages'  />
                    </div>

                    <div className={Styles.toolSection}>
                    <Chips titlename='Tools'  />
                    </div>

                    <div className={Styles.create}>
                        <button className={Styles.createBtn}>CREATE JOB</button>
                    </div>

                </div>
            </div>
         
        </div>
    );
}

export default Creation;