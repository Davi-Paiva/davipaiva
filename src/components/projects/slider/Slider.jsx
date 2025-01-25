import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import Card from '../card/Card'
import leetPhoto from '../../../assets/leetcode.png'
import reactLogo from '../../../assets/reactLogo.png'

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenSize: this.calculateSize(window.innerWidth),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenSize: this.calculateSize(window.innerWidth),
    });
  };

  calculateSize = (windowWidth) => {
    return windowWidth;
  };
  render() {
    const { screenSize } = this.state;

    const settings = {
      arrows: screenSize > 940 ? true : false,
      dots: screenSize > 940 ? false : true,
      centerMode: true,
      infinite: true,
      centerPadding: '0',
      speed: 500,
      slidesToShow: screenSize > 940 ? 3 : 1,
    };
    return (
      <div className='slider'>
        <Slider {...settings}>
          <Card photo={reactLogo} title='davipaiva' info='The GitHub Repository where you can find this website' button ='Go to repository!' url = ''/>
          <Card info='' title='More Coming Soon' photo='none' button ='none'/>
          <Card info='' title='More Coming Soon' photo='none' button ='none'/>
          <Card info='' title='More Coming Soon' photo='none' button ='none'/>
          <Card info='' title='More Coming Soon' photo='none' button ='none'/>
          <Card photo={leetPhoto} title='Leet Code' info='My LeetCode profile where I post my solutions to coding problems' button ='Check out my profile!' url = 'https://leetcode.com/u/DaviPaiva/'/>
        </Slider>
      </div>
    );
  }
}