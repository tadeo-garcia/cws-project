'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
<<<<<<< HEAD
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
=======
        userName: 'userOne', 
        hashedPassword: await bcrypt.hash('password', 10), 
        email: 'joseph@smith.com', 
        location: 'dallas', 
        avatar: "/public/pics/profile-pics/ahmed-firdaus-N7HRLjqNDqg-unsplash.jpg", 
        fullName:'Joseph Smith', 
        bio: "Washington received his initial military training and command with the Virginia Regiment during the French and Indian War. He was later elected to the Virginia House of Burgesses and was named a delegate to the Continental Congress, where he was appointed Commanding General of the Continental Army. He commanded American forces, allied with France, in the defeat and surrender of the British during the Siege of Yorktown. He resigned his commission after the Treaty of Paris in 1783. On April 30, 1789, George Washington, standing on the balcony of Federal Hall on Wall Street in New York, took his oath of office as the first President of the United States. “As the first of every thing, in our situation will serve to establish a Precedent,” he wrote James Madison, “it is devoutly wished on my part", 
        interests:'stalking'
      },
      {
        userName: 'userTwo', 
        hashedPassword: await bcrypt.hash('password', 10), 
        email: 'leeory@jenkins.com', 
        location: 'Azeroth', 
        avatar: '/public/pics/profile-pics/ben-parker-OhKElOkQ3RE-unsplash.jpg', 
        fullName:'Leeroy Jenkins', 
        bio: "The original video was released by a World of Warcraft player guild to video-sharing site Warcraftmovies on May 11, 2005.[1] The video features a group of players discussing a detailed battle plan for their next encounter while Leeroy is away from his computer, preparing a plate of chicken. This plan is intended to help Leeroy obtain a piece of armor from the boss monsters, but is ruined when Leeroy himself returns and, ignorant of the strategy, immediately rushes headlong into battle shouting his own name in a stylized battle cry. His companions rush to help, but Leeroy's actions ruin the detailed plan and all the members of the group are killed. (The plan was deeply flawed even before Leeroy ruined it, containing several critical misunderstandings of the then-current game mechanics.)", 
        interests:'charging'
      },
      {
        userName: 'userThree', 
        hashedPassword: await bcrypt.hash('password', 10), 
        email: 'mary@smith.com', 
        location: 'Springfield', 
        avatar: '/public/pics/profile-pics/annie-spratt-MBjG3mgBEno-unsplash.jpg', 
        fullName:'Mary Smith', 
        bio: "Silverman was a writer and performer on Saturday Night Live, and she starred in and produced The Sarah Silverman Program, which ran from 2007 to 2010 on Comedy Central, for which she was nominated for a Primetime Emmy Award for Outstanding Lead Actress in a Comedy Series.[5] She released an autobiography The Bedwetter in 2010. She also appeared in other television programs, such as Mr. Show and VIP, and starred in films, including Who's the Caboose? (1997), School of Rock (2003), Wreck-It Ralph (2012), A Million Ways to Die in the West (2014), and Ralph Breaks the Internet (2018). In 2015, she starred in the drama I Smile Back, for which she was nominated for a Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Leading Role.", 
>>>>>>> be6deb29e0f587029d9fe7a2db63700753bafc2b
        interests:'painting by wine'
      }], { fields: ['userName', 'hashedPassword', 'email', 'location', 'avatar', 'fullName', 'bio', 'interests'] });

  },


down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Users', null, {});
}
};
