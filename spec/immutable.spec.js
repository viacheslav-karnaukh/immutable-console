import sinon from 'sinon';
import { expect } from 'chai';
import {
    List,
    Map,
    OrderedMap,
    Set,
    OrderedSet,
    Stack,
    Range,
    Repeat,
    Record,
    Seq
} from 'immutable';
import immutableConsole from '../index';


export default function() {
    let logSpy;

    before('wrap console.log with spy', function() {
        logSpy = sinon.spy(console, 'log');
    });

    after('unwrap console.log to use it natively in next suits', function() {
        logSpy.restore();
    });

    it('should work for Map', function() {
        immutableConsole.log(Map({a: 1}));
        expect(logSpy.lastCall.args[0]).to.deep.equal({a: 1});
    });

    it('should work for List', function() {
        immutableConsole.log(List([1,2,3]));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,2,3]);;
    });

    it('should work for OrderedMap', function() {
        immutableConsole.log(OrderedMap([['a',1],['b',2]]));
        expect(logSpy.lastCall.args[0]).to.deep.equal({a: 1, b: 2});;
    });

    it('should work for Set', function() {
        immutableConsole.log(Set([1,2,3]));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,2,3]);
    });

    it('should work for OrderedSet', function() {
        immutableConsole.log(OrderedSet([1,2,3]));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,2,3]);;
    });

    it('should work for Stack', function() {
        immutableConsole.log(Stack([1,2,3]));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,2,3]);;
    });

    it('should work for Range', function() {
        immutableConsole.log(Range(1,4));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,2,3]);;
    });

    it('should work for Repeat', function() {
        immutableConsole.log(Repeat(1,3));
        expect(logSpy.lastCall.args[0]).to.deep.equal([1,1,1]);
    });

    it('should work for Record', function() {
        const ABRecord = Record({a: 1, b: 2});
        const myRecord = new ABRecord({b: 3});
        immutableConsole.log(myRecord);
        expect(logSpy.lastCall.args[0]).to.deep.equal({a: 1, b: 3});
    });
    
    it('should work for Seq', function() {
        immutableConsole.log(Seq({a: 1, b: 2}));
        expect(logSpy.lastCall.args[0]).to.deep.equal({a: 1, b: 2});
    });
}
