import { expect } from 'chai';
import immutableConsole from '../index';


export default function() {
    it('should be the same for #info', function() {
        expect(immutableConsole.info).to.equal(console.info);
    });

    it('should be the same for #warn', function() {
        expect(immutableConsole.warn).to.equal(console.warn);
    });

    it('should be the same for #error', function() {
        expect(immutableConsole.error).to.equal(console.error);
    });

    it('should be the same for #dir', function() {
        expect(immutableConsole.dir).to.equal(console.dir);
    });

    it('should be the same for #time', function() {
        expect(immutableConsole.time).to.equal(console.time);
    });

    it('should be the same for #timeEnd', function() {
        expect(immutableConsole.timeEnd).to.equal(console.timeEnd);
    });

    it('should be the same for #trace', function() {
        expect(immutableConsole.trace).to.equal(console.trace);
    });

    it('should be the same for #assert', function() {
        expect(immutableConsole.assert).to.equal(console.assert);
    });

    it('should be the same for #Console', function() {
        expect(immutableConsole.Console).to.equal(console.Console);
    });

    it('should be the same for #debug', function() {
        expect(immutableConsole.debug).to.equal(console.debug);
    });

    it('should be the same for #dirxml', function() {
        expect(immutableConsole.dirxml).to.equal(console.dirxml);
    });

    it('should be the same for #table', function() {
        expect(immutableConsole.table).to.equal(console.table);
    });

    it('should be the same for #group', function() {
        expect(immutableConsole.group).to.equal(console.group);
    });

    it('should be the same for #groupCollapsed', function() {
        expect(immutableConsole.groupCollapsed).to.equal(console.groupCollapsed);
    });

    it('should be the same for #groupEnd', function() {
        expect(immutableConsole.groupEnd).to.equal(console.groupEnd);
    });

    it('should be the same for #clear', function() {
        expect(immutableConsole.clear).to.equal(console.clear);
    });

    it('should be the same for #count', function() {
        expect(immutableConsole.count).to.equal(console.count);
    });

    it('should be the same for #markTimeline', function() {
        expect(immutableConsole.markTimeline).to.equal(console.markTimeline);
    });

    it('should be the same for #profile', function() {
        expect(immutableConsole.profile).to.equal(console.profile);
    });

    it('should be the same for #profileEnd', function() {
        expect(immutableConsole.profileEnd).to.equal(console.profileEnd);
    });

    it('should be the same for #timeline', function() {
        expect(immutableConsole.timeline).to.equal(console.timeline);
    });

    it('should be the same for #timelineEnd', function() {
        expect(immutableConsole.timelineEnd).to.equal(console.timelineEnd);
    });

    it('should be the same for #timeStamp', function() {
        expect(immutableConsole.timeStamp).to.equal(console.timeStamp);
    });
}
