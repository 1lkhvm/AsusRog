import React from 'react'
import FooterComponents from '../../Components/FooterComponents'
import ArtSection5 from '../../Components/HomeComponents/ArtSection5'
import ExploreSection2 from '../../Components/HomeComponents/ExploreSection2'
import RecentSection3 from '../../Components/HomeComponents/RecentSection3'
import RoginactionSection4 from '../../Components/HomeComponents/RoginactionSection4'
import Roginaction from '../../Components/HomeComponents/RoginactionSection4'
import SliderSecton1 from '../../Components/HomeComponents/SliderSection1'
import NavbarComponents from '../../Components/NavbarComponents'

function Home() {
  return (
    <React.StrictMode>
    <NavbarComponents></NavbarComponents>
    <FooterComponents></FooterComponents>
    <SliderSecton1></SliderSecton1>
    <ExploreSection2></ExploreSection2>
    <RecentSection3></RecentSection3>
    <RoginactionSection4></RoginactionSection4>
    <ArtSection5></ArtSection5>
    <FooterComponents></FooterComponents>
    </React.StrictMode>
  )
}

export default Home