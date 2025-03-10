import React from 'react';
import './Introduction.css';

function Introduction() {
    const handleExplore = () => {
        console.log('Explore button clicked');
    }


    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className="introduction-page">
            <div className="introduction-container">
                <h1>Explore what's next for you</h1>
                <p>Finding the right school and program is a crucial step in shaping your future. By answering a few key questions about your interests, goals, and learning preferences, you’ll receive personalized recommendations that align with your aspirations. Our matching process considers factors like career pathways, academic strengths, and hands-on opportunities to help you make an informed choice with confidence. Whether you seek a specialized program or a well-rounded education, we’re here to guide you toward the best fit for your journey.</p>
                <button 
                    className='explore'
                    onClick={handleExplore}
                    type="button"
                    style={{cursor: 'pointer'}}>
                    Start Exploring
                </button>
                <h2>About Explore Your Fit</h2>
                <div className="feature-boxes">
                    
                    <div className='feature-box'
                        onClick={() => handleExternalLink('https://www.studyaustralia.gov.au/en')}>
                        <div className='box-content'>
                            <h3>Study with Australia</h3>
                        </div>
                    </div>

                    <div className='feature-box'
                        onClick={() => handleExternalLink('https://www.studyaustralia.gov.au/en/plan-your-studies/list-of-australian-universities')}>
                        <div className='box-content'>
                            <h3>List of Universities</h3>
                        </div>
                    </div>

                    <div className='feature-box'
                        onClick={() => handleExternalLink('https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500')}>
                        <div className='box-content'>
                            <h3>Plan Your Study</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Introduction;