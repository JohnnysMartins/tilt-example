const { execSync } = require("child_process");

const topics = process.env.KAFKA_TOPICS.split(",");

console.log(topics);

const kafkaServer = "localhost:9092";

topics.forEach((topic) => {
  const command = `kafka-topics --create --if-not-exists --topic ${topic} --bootstrap-server ${kafkaServer} --partitions 1 --replication-factor 1`;

  execSync(`docker-compose exec -i kafka /bin/bash -c "${command}"`);
  console.log(`Kafka topic created: ${topic}`);
});
