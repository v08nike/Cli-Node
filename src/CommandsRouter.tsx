import React from 'react';
import Validate from './components/Validate/Validate';
import { contextRouter } from './components/Context';
import { CliInput } from './CliModels';

const commandsDictionary = (cliInput: CliInput) => ({
  ['validate']: <Validate options={cliInput.options} />,
  ['context']: contextRouter(cliInput)
});

export const commandsRouter = (cli: any): any => {
  const cliInput = CliInput.createFromMeow(cli);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return commandsDictionary(cliInput)[cliInput.command];
};
