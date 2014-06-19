describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    sinon.spy(model, 'trigger');
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).to.have.been.calledWith('play', model);
    });
  });

  describe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).to.have.been.calledWith('enqueue', model);
    });
  });

  describe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).to.have.been.calledWith('dequeue', model);
    });
  });

  describe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).to.have.been.calledWith('ended', model);
    });
  });
  describe('initialize', function() {
    it('contains null values for attributes if constructed with no args', function() {
      var newSong = new SongModel();
      expect(newSong.get('url')).to.eql(null);
      expect(newSong.get('title')).to.eql(null);
      expect(newSong.get('artist')).to.eql(null);
    });
    it('contains values for attributes consistent with its input', function() {
      expect(model.get('url')).to.eql('/test/testsong.mp3');
      expect(model.get('title')).to.eql('test song');
      expect(model.get('artist')).to.eql('data');
    });
  });
});
