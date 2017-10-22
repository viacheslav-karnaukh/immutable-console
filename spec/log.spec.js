import { expect } from 'chai';
import immutableConsole from '../src';


export default function() {
    it('should be a method', function() {
        expect(immutableConsole.log).to.be.a('function');
    });

    it('should be a custom implementation', function() {
        expect(immutableConsole.log).not.to.equal(console.log);
    });
}
