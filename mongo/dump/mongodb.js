databases = ["Dokumenty", "FrontendUloziste", "Identity"];

for (var i = databases.length - 1; i >= 0; i--) {
  db = db.getSiblingDB(databases[i]);

  db.createCollection("lada", function (err, collection) {
    collection.insert({ test: "value" });
  });

  db.createUser({
    user: "foo",
    pwd: "password123",
    roles: ["readWrite"],
  });
}
