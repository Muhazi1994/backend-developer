const faker = require("faker");
const moment = require("moment");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("events", [
      {
        title: "User Conference – Oracle Code One (JavaOne)",
        userId: 1,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/11/18"),
        dateEnd: new Date("2021/11/18"),
        time: "Thu, Nov 18 @ 9.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "Oracle",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event Roadshow – Marketo’s Innovation in the Nation",
        userId: 2,
        categoryId: 5,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/11/19"),
        dateEnd: new Date("2021/11/19"),
        time: "Fri, Nov 19 @ 10.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "Marketo",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Networking Event – Lean Startup’s Networking Event",
        userId: 3,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/11/20"),
        dateEnd: new Date("2021/11/20"),
        time: "Sat, Nov 20 @ 1.00 PM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "Lean",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          "Publisher Conference – Content Marketing Institute’s Sales Acceleration Event",
        userId: 4,
        categoryId: 4,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/11/24"),
        dateEnd: new Date("2021/11/24"),
        time: "Wed, Nov 24 @ 3.00 PM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "CMI Group",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Virtual Event – Google I/O",
        userId: 5,
        categoryId: 4,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/11/26"),
        dateEnd: new Date("2021/11/26"),
        time: "Fri, Nov 26 @ 10.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "Google",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Experiential Activation – JetBlue’s Ultimate Icebreaker",
        userId: 4,
        categoryId: 6,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/12/1"),
        dateEnd: new Date("2021/12/1"),
        time: "Wed, Dec 1 @ 8.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "JetBlue",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Seminar – SQLBits",
        userId: 3,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2021/12/16"),
        dateEnd: new Date("2021/12/16"),
        time: "Thu, Dec 16 @ 11.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "SQLBits",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          "Internal Company Meeting – Plum Organics’ Coloring Book Meetings",
        userId: 2,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2022/1/5"),
        dateEnd: new Date("2022/1/5"),
        time: "Wed, Jan 5 @ 11.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "Plum Organics",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fundraising Gala – The Canadian Cancer Society’s Daffodil Ball",
        userId: 1,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.paragraph(),
        dateStart: new Date("2022/1/10"),
        dateEnd: new Date("2022/1/10"),
        time: "Mon, Jan 10 @ 10.00 AM ICT",
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: "The Canadian Cancer Society",
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
