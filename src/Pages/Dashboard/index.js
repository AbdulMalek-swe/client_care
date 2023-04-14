import GmailCare from 'Components/Care/Gmail';
import React from 'react';
import { useParams } from 'react-router-dom';

const DashBoard = () => {
    const {type}= useParams();
   console.log(type);
    return (
        <>
        {
            (type.includes('gmailcare')&& <GmailCare/>)
        }
        </>
    );
};

export default DashBoard;