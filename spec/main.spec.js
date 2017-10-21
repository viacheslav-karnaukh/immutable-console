import propsSpec from './props.spec';
import logSpec from './log.spec';
import immutableSpec from './immutable.spec';


describe('immutableConsole', () => {
    context('has the same properties as global console object', propsSpec);

    context('has #log method different to console.log', logSpec);

    context('can print immutable data in human readable format', immutableSpec);
});
