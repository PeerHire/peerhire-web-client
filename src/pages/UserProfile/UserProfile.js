import React, { useState } from 'react';
import './UserProfile.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PersonalInformation from './PersonalInformation';
import EducationalBackground from './EducationalBackground';
import SkillsShowcase from './SkillsShowcase';
import PortfolioSection from './PortfolioSection';
import WorkHistoryLog from './WorkHistoryLog';
import CertificationsAndAchievements from './CertificationsAndAchievements';
import RatingsAndReviews from './RatingsAndReviews';
import LanguageProficiency from './LanguageProficiency';
import AvailabilityStatus from './AvailabilityStatus';
import NotificationsAndSettings from './NotificationsAndSettings';

function UserProfileTabs() {
    const [activeTab, setActiveTab] = useState('personalInformation');

    const renderActiveTabContent = () => {
        switch (activeTab) {
            case 'personalInformation':
                return <PersonalInformation />;
            case 'educationalBackground':
                return <EducationalBackground />;
            case 'skillsShowcase':
                return <SkillsShowcase />;
            case 'portfolioSection':
                return <PortfolioSection />;
            case 'workHistoryLog':
                return <WorkHistoryLog />;
            case 'certificationsAndAchievements':
                return <CertificationsAndAchievements />;
            case 'ratingsAndReviews':
                return <RatingsAndReviews />;
            case 'languageProficiency':
                return <LanguageProficiency />;
            case 'availabilityStatus':
                return <AvailabilityStatus />;
            case 'notificationsAndSettings':
                return <NotificationsAndSettings />;
            default:
                return <PersonalInformation />;
        }
    };

    return (
        <>
        <Header/>
            <div className="user-profile-tabs">
            {/* Tab buttons */}
            <div className="tab-list">
                <button onClick={() => setActiveTab('personalInformation')} className={(activeTab ==='personalInformation')?'active':null}>Personal Information</button>
                <button onClick={() => setActiveTab('educationalBackground')} className={(activeTab ==='educationalBackground')?'active':null}>Educational Background</button>
                <button onClick={() => setActiveTab('skillsShowcase')} className={(activeTab ==='skillsShowcase')?'active':null}>Skills</button>
                <button onClick={() => setActiveTab('portfolioSection')} className={(activeTab ==='portfolioSection')?'active':null}>Portfolio</button>
                <button onClick={() => setActiveTab('workHistoryLog')} className={(activeTab ==='workHistoryLog')?'active':null}>Work History Log</button>
                <button onClick={() => setActiveTab('certificationsAndAchievements')} className={(activeTab ==='certificationsAndAchievements')?'active':null}>Certifications and Achievements</button>
                <button onClick={() => setActiveTab('ratingsAndReviews')} className={(activeTab ==='ratingsAndReviews')?'active':null}>Ratings and Reviews</button>
                <button onClick={() => setActiveTab('languageProficiency')} className={(activeTab ==='languageProficiency')?'active':null}>Language Proficiency</button>
                <button onClick={() => setActiveTab('availabilityStatus')} className={(activeTab ==='availabilityStatus')?'active':null}>Availability Status</button>
                <button onClick={() => setActiveTab('notificationsAndSettings')} className={(activeTab ==='notificationsAndSettings')?'active':null}>Notifications and Settings</button>
            </div>
            {/* Tab content */}
            <div className="tab-content">
                {renderActiveTabContent()}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default UserProfileTabs;
