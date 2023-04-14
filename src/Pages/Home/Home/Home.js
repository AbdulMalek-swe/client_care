import React from 'react';
import Footer from '../../Share/Footer/Footer';
 
import Index from '../AiTools/Index';
import Banner from '../Banner/Banner';
import Bill from '../BIll/Bill';
import Care from '../Care/Care';
import CareCard from '../CareCard/CareCard';
 
import CustomerService from '../CustomerService/CustomerService';
import Duration from '../Duration/Duration';
import CustomerSupport from '../Support/CustomerSupport';

const Home = () => {
    return (
        <div>
            <Banner/>
            <CustomerService/>
            <Index/>
            <Care/>
           <Duration/>
           <CareCard/>
           <Bill/>
           <CustomerSupport/>
           <Footer/>
        </div>
    );
};

export default Home;