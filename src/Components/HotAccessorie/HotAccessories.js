import React from 'react';
import HotIteamCard from '../HotIteamCard/HotIteamCard';
import './HotAccessories.css'
const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccesories,mobileAccesoriesCover}) => {
    return (
        <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover||homeCover||lifestyleCover||mobileAccesoriesCover} alt="cover" />
            </div>
            {/* 2nd part */}
            <div>
                {music&&
                    music.map((iteam,index)=>(
                        <HotIteamCard 
                        key={iteam.image}
                        name={iteam.name}
                        price={iteam.price}
                        image={iteam.image}
                        index={index}
                        ></HotIteamCard>
                    ))
                }
                { smartDevice  &&
                    smartDevice.map((iteam,index)=>(
                        <HotIteamCard 
                        key={iteam.image}
                        name={iteam.name}
                        price={iteam.price}
                        image={iteam.image}
                        index={index}
                        ></HotIteamCard>
                    ))
                }
                {  home  &&
                    home.map((iteam,index)=>(
                        <HotIteamCard 
                        key={iteam.image}
                        name={iteam.name}
                        price={iteam.price}
                        image={iteam.image}
                        index={index}
                        ></HotIteamCard>
                    ))
                }
                {  lifestyle  &&
                    lifestyle.map((iteam,index)=>(
                        <HotIteamCard 
                        key={iteam.image}
                        name={iteam.name}
                        price={iteam.price}
                        image={iteam.image}
                        index={index}
                        ></HotIteamCard>
                    ))
                }
                {  mobileAccesories &&
                   mobileAccesories.map((iteam,index)=>(
                        <HotIteamCard 
                        key={iteam.image}
                        name={iteam.name}
                        price={iteam.price}
                        image={iteam.image}
                        index={index}
                        ></HotIteamCard>
                    ))
                }
                <HotIteamCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"></HotIteamCard>
            </div>
        </div>
    );
};

export default HotAccessories;