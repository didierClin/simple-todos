if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Ceci est ma première tache" },
      { text: "Ceci est ma seconde tache" },
      { text: "Ceci est ma troisième tache" }
    ]
  });
}
