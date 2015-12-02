import { expect } from 'chai';
import InfoBox from '../../app/directives/info-box/link';

describe("If the attribute", function() {

    it(" is funny, the directive returns 'This is a funny directive!'!", function() {

        let attributes = { funny: '' };
        let scope = { directiveContent: '' }

        new InfoBox(scope, attributes);

        expect(scope.directiveContent).to.equal('This is a funny directive!');
    });

    it(" is not funny, the directive returns 'This is a directive!'!", function() {

        let attributes = {};
        let scope = { directiveContent: '' }

        new InfoBox(scope, attributes);

        expect(scope.directiveContent).to.equal('This is a directive!');
    });
});
