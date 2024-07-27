const getData = () => {
  return [
    {
      id:1,
      title: "Dicoding Contact App",
      description: "Application for storing a list of Instagram names and usernames",
      isDeployed: true,
      stack: "React, Node.js, HTML, CSS, JavaScript",
      demoLink: "http://contact-app-dicoding.eeswepe.my.id",
      sourceCode: "https://github.com/eeswepe/contact-app-dicoding",
    },
    {
      id:2,
      title: "Chat Pas",
      description: "Chat application running on a local network to cheat the exam system",
      isDeployed: false,
      stack: "Express.js, Socket.io, Node.js, HTML, CSS, JavaScript",
      demoLink: "https://project2.com",
      sourceCode: "https://github.com/eeswepe/chat-pas",
    },
    {
      id:3,
      title: "Bagi Hasil",
      description: "File sharing application to make it easier for students to share answers during online learning",
      isDeployed: false,
      stack: "PHP, HTML, CSS, JavaScript",
      demoLink: "https://project3.com",
      sourceCode: "https://github.com/eeswepe/bagihasil",
    },
  ];
}

export {getData};