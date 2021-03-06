import path from 'path';
import Blueprint from 'models/blueprint';
import config from 'config';

const { basePath } = config;

const fixtureBlueprints = path.resolve(__dirname, '..', 'fixtures', 'blueprints');
const basicBlueprint    = path.join(fixtureBlueprints, 'basic');

describe('(Model) Blueprint', function() {
  const blueprint = new Blueprint(basicBlueprint);

  describe('#filesPath', function() {
    it('returns a default of "files" ', function() {
      const expectedPath = path.join(basicBlueprint, 'files');
      expect(blueprint.filesPath()).to.eql(expectedPath);
    });
  });

  describe('#files', function() {
    it('returns an array of files in blueprint', function() {
      const files = blueprint.files();
      const expectedFiles = [
        'expected-file.js'
      ];
      expect(files).to.eql(expectedFiles);
    });
  });

  describe('.defaultLookupPaths', function() {
    it('returns an array with all potential paths blueprints can live', function() {
      const expectedFiles = [
        path.join(basePath, 'blueprints'),
        path.join(__dirname, '..', '..', 'blueprints')
      ];
      expect(Blueprint.defaultLookupPaths()).to.eql(expectedFiles);
    });
  });
});
