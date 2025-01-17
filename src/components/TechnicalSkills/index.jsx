import React from 'react';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Ratings from 'react-ratings-declarative';
import redux from '../../assets/images/redux-logo.svg';
import firebase from '../../assets/images/firebase-logo.svg';
import antDesign from '../../assets/images/ant-design-logo.svg';
import html from '../../assets/images/html-logo.svg';
import i18n from '../../assets/images/i18next-logo.svg';
import javascript from '../../assets/images/javascript-logo.svg';
import react from '../../assets/images/react-logo.svg';
import vue from '../../assets/images/vue-logo.svg';
import jest from '../../assets/images/jest-logo.svg';
import typescript from '../../assets/images/typescript-logo.svg';
import css from '../../assets/images/css-logo.svg';
import git from '../../assets/images/git-logo.svg';
import github from '../../assets/images/github-logo.svg';
import next from '../../assets/images/next-logo.svg';
import nuxt from '../../assets/images/nuxt-logo.svg';
import sass from '../../assets/images/sass-logo.svg';
import expo from '../../assets/images/expo-logo.svg';
import bootstrap from '../../assets/images/bootstrap-logo.svg';
import nodejs from '../../assets/images/nodejs-logo.svg';
import express from '../../assets/images/express-logo.svg';
import Skill from '../Skill';

SwiperCore.use([Pagination]);

const pagination = {
  el: '.my-custom-pagination-div',
  clickable: true,
  renderBullet: (index, className) => `<div class="${className}"></div>`,
  draggable: true,
};

const SKILLS = [
  <Skill title="JavaScript" rating={3} icon={javascript} />,
  <Skill title="React" rating={3} icon={react} />,
  <Skill title="CSS" rating={3} icon={css} />,
  <Skill title="React Native" rating={3} icon={react} />,
  <Skill title="HTML" rating={3} icon={html} />,
  <Skill title="Vue" rating={3} icon={vue} />,
  <Skill title="Nuxt" rating={3} icon={nuxt} />,
  <Skill title="Git" rating={3} icon={git} />,
  <Skill title="GitHub" rating={3} icon={github} />,
  <Skill title="Expo" rating={3} icon={expo} />,
  <Skill title="Ant Design" rating={3} icon={antDesign} />,
  <Skill title="Bootstrap" rating={3} icon={bootstrap} />,
  <Skill title="TypeScript" rating={2} icon={typescript} />,
  <Skill title="Redux" rating={2} icon={redux} />,
  <Skill title="Firebase" rating={2} icon={firebase} />,
  <Skill title="Next" rating={2} icon={next} />,
  <Skill title="Sass" rating={2} icon={sass} />,
  <Skill title="Jest" rating={2} icon={jest} />,
  <Skill title="NodeJs" rating={1} icon={nodejs} />,
  <Skill title="ExpressJs" rating={1} icon={express} />,
  <Skill title="i18next" rating={1} icon={i18n} />,
];

const SWIPER_BREAKPOINTS = {
  280: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    slidesPerView: 3,
  },
  450: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 4,
    slidesPerView: 4,
  },
  768: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 5,
    slidesPerView: 5,
  },
  992: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 6,
    slidesPerView: 6,
  },
  1200: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 7,
    slidesPerView: 7,
  },
  1400: {
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerGroup: 8,
    slidesPerView: 8,
  },
};

const TechnicalSkills = () => (
  <>
    <div className="technical-skills">
      <div>
        <h3 id="technicalSkills">Technical Skills</h3>
      </div>
      <div className="rating-explanation">
        <Ratings
          rating={3}
          widgetEmptyColors="#434343"
          widgetRatedColors="white"
          widgetDimensions="13px"
          widgetSpacings="1px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <h6>
          <small>= frequently using</small>
        </h6>
      </div>
      <div className="rating-explanation">
        <Ratings
          rating={1}
          widgetEmptyColors="#434343"
          widgetRatedColors="white"
          widgetDimensions="13px"
          widgetSpacings="1px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <h6>
          <small>= tried a few times</small>
        </h6>
      </div>
    </div>
    <div>
      <Swiper
        pagination={pagination}
        slidesPerColumnFill="row"
        breakpoints={SWIPER_BREAKPOINTS}
      >
        {/*  eslint-disable  */}
        {SKILLS.map((skill, index) => (
          <SwiperSlide key={`skill slider ${index}`}>{skill}</SwiperSlide>
        ))}
        {/*  eslint-enable  */}
      </Swiper>
    </div>
    <div className="my-custom-pagination-div" />
  </>
);

export default TechnicalSkills;
