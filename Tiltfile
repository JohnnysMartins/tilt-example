allow_k8s_contexts(k8s_context())

local_resource("clone-repos", cmd="node scripts/clone-repos.js", labels=["scripts"], auto_init=True)
local_resource("create-topics", cmd="node --env-file=.env scripts/create-kafka-topics.js", labels=["scripts"], auto_init=False)

docker_compose("docker-compose.yml")
