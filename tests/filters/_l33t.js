import { expect } from 'chai';
import l33t from '../../app/filters/l33t';

describe("When a character is passed", function() {

    it("it must replace 'a' with '4'!", function() {

        expect(l33t('a')).to.equal('4');
    });

    it("it must replace 'e' with '3'!", function() {

        expect(l33t('e')).to.equal('3');
    });

    it("it must replace 'i' with '1'!", function() {

        expect(l33t('i')).to.equal('1');
    });

    it("it must replace 'o' with '0'!", function() {

        expect(l33t('o')).to.equal('0');
    });
});

describe("When a string is passed", function() {

    it("it must replace 'aeiou' with '4310u'!", function() {

        expect(l33t('aeiou')).to.equal('4310u');
    });
});
