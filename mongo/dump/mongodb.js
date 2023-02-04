databases = ["docs", "storage", "ids"];

for (var i = databases.length - 1; i >= 0; i--) {
  db = db.getSiblingDB(databases[i]);

  db.createCollection("col", function (err, collection) {
    collection.insert({ test: "value" });
  });

  db.createUser({
    user: "foo",
    pwd: "password123",
    roles: ["readWrite"],
  });
}
