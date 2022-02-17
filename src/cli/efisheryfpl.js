#!/usr/bin/env node
const { program } = require("commander");
const { cliName } = require("../helper/getCliVariables");
const commandGet = require("./efisheryfpl-get");

program
  .name(cliName)
  .description("CLI data harga perikanan di Indonesia berdasarkan resources")
  .usage("[OPTIONS] COMMAND")
  .version("0.0.1");

program.addCommand(commandGet);

program.action(() => {
  console.log("");
  program.outputHelp();
  console.log("");
  console.log(
    `Run '${cliName} COMMAND --help' for more information about a command.`
  );
});

program.parse(process.argv);
