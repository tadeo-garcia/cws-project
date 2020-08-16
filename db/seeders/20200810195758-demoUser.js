'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        userName: 'userOne',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'joseph@smith.com',
        location: 'dallas',
        avatar: "/public/pics/profile-pics/ahmed-firdaus-N7HRLjqNDqg-unsplash.jpg",
        fullName:'Joseph Smith',
        bio: "I love strangers",
        interests:'stalking'
      },
      {
        userName: 'userTwo',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'leeory@jenkins.com',
        location: 'Azeroth',
        avatar: '/public/pics/profile-pics/ben-parker-OhKElOkQ3RE-unsplash.jpg',
        fullName:'Leeroy Jenkins',
        bio: "I love chicken",
        interests:'charging'
      },
      {
        userName: 'userThree',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'mary@smith.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userFour',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'jane@doe.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userFive',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'zach@galifianakis.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userSix',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'mary@hadALittleLamb.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userSeven',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'alan@garner.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userEight',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'mr@anderson.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userNine',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'sophia@petrillo.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      },
      {
        userName: 'userTen',
        hashedPassword: await bcrypt.hash('password', 10),
        email: 'michelle@tanner.com',
        location: 'Springfield',
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg',
        fullName:'Mary Smith',
        bio: "I love facebook",
        interests:'painting by wine'
      }], { fields: ['userName', 'hashedPassword', 'email', 'location', 'avatar', 'fullName', 'bio', 'interests'] });

  },


down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Users', null, {});
}
};
