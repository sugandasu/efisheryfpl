const { Command } = require("commander");
const { cliName } = require("../helper/getCliVariables");
const commandGetAll = require("./efisheryfpl-get-all");

const command = new Command("get");

command.description(
  "Get data harga perikanan di Indonesia berdasarkan resources"
);
command.addCommand(commandGetAll);

command.action(() => {
  console.log("");
  command.outputHelp();
  console.log("");
  console.log(
    `Run '${cliName} get COMMAND --help' for more information about a command.`
  );
});

module.exports = command;
