#!/usr/bin/env npx --yes zx

$.verbose = false;

const containers = await $`docker ps -a -q`;
if (containers.stdout !== "") {
  await $`docker stop ${containers.stdout.split("\n")}`;
  await $`docker rm -f -v ${containers.stdout.split("\n")}`;
  console.log("Containers removed");
  console.log(containers.toString());
} else {
  console.log("No containers to remove");
}
